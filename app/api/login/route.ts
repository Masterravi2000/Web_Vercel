import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = 'abc12345678';

export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    try {
        const { email, password } = (await request.json()) as {
            email: string;
            password: string;
        };

        if (!email || !password) {
            return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY);
        await prisma.user.update({
            where: { id: user.id },
            data: { token: token }
        });

        return NextResponse.json({ token });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}