import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
      const { name, email, username, password } = (await request.json()) as {
        name: string;
        email: string;
        username: string;
        password: string;
      };
  
      if (!name || !email || !username || !password) {
        return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
      }

      const existingUser = await prisma.user.findMany({
        where: {
          OR: [
            { email: email },
            { username: username }
          ]
        }
      });

      if (existingUser.length > 0) {
        return NextResponse.json({ message: 'Username or Email already exists' }, { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          username: username,
          password: hashedPassword,
        },
      });
  
      return NextResponse.json({ message: 'User registered successfully', user });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error in POST /register:', error.message);
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
  
