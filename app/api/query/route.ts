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
const SPREADSHEET_ID = '1hBKiTEWZSSachkVQfCdqfV0geVd3nD62McNVTnZWw6Y';
const RANGE_NAME = 'Sheet1!A:F';
const CREDENTIALS_PATH = path.join(process.cwd(), 'creds.json'); 

async function authenticateGoogleSheets() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });
  const service = google.sheets({ version: 'v4', auth });
  return service;
}

async function appendToSheet(fname: string, lname: string, email: string, phone: string, subject: string, message: string) {
  const service = await authenticateGoogleSheets();
  const values = [[fname, lname, email, phone, subject, message]];
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
    const { fname, lname, email, phone, subject, message } = (await request.json()) as {
      fname: string;
      lname: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };

    if (!fname || !lname || !email || !phone || !subject || !message) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const mail = await prisma.query.create({
      data: { fname, lname, email, phone, subject, message },
    });

    const emailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `New contact form submission:
        First Name: ${fname}
        Last Name: ${lname}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    await transporter.sendMail(emailOptions);

    await appendToSheet(fname, lname, email, phone, subject, message);

    return NextResponse.json({ message: 'Message sent successfully', mail });
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
