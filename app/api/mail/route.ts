import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SERVICE_ACCOUNT_FILE = path.join(process.cwd(), 'creds.json'); // Adjust the path to your credentials file
const SPREADSHEET_ID = '1hBKiTEWZSSachkVQfCdqfV0geVd3nD62McNVTnZWw6Y';
const RANGE_NAME = 'Sheet1!A:C';

async function authenticateGoogleSheets() {
  const credentials = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_FILE, 'utf8'));
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });
  const service = google.sheets({ version: 'v4', auth });
  return service;
}

async function appendToSheet(email: string, user: string, message: string) {
  const service = await authenticateGoogleSheets();
  const values = [[email, user, message]];
  const resource = { values };

  try {
    await service.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE_NAME,
      valueInputOption: 'RAW',
      requestBody: resource,
    });
    console.log('Data appended to sheet');
  } catch (err) {
    console.error(`Error appending data to sheet: ${err}`);
    throw err;
  }
}

export async function POST(request: Request) {
  try {
    const { waitingemail, user } = (await request.json()) as { waitingemail: string; user: string };

    if (!waitingemail || !user) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const mail = await prisma.mail.create({
      data: { waitingemail, user },
    });

    const emailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New User Registration',
      text: `A new user has registered:
      Email: ${waitingemail}
      User Name: ${user}
      Message sent from Strength Sports World`,
    };
    await transporter.sendMail(emailOptions);

    // Append data to Google Sheet
    await appendToSheet(waitingemail, user, 'New User Registration');

    return NextResponse.json({ message: 'User registered successfully', mail });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error in POST /mail:', error.message);
      return NextResponse.json(
        { message: 'Internal server error', error: error.message },
        { status: 500 }
      );
    } else {
      console.error('Unknown error:', error);
      return NextResponse.json(
        { message: 'Internal server error', error: String(error) },
        { status: 500 }
      );
    }
  }
}
