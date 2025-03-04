import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const blogs = await prisma.blog.findMany();
  if (blogs.length === 0) {
    return NextResponse.json({ message: 'No blogs found' });
  }
  return NextResponse.json(blogs, { status: 200 });
}

export async function POST(request: NextRequest) {
  const { title, description, category } = await request.json();
  const newBlog = await prisma.blog.create({
    data: { title, description, category },
  });
  return NextResponse.json(newBlog, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { id, title, description, category } = await request.json();

  const updatedBlog = await prisma.blog.update({
    where: { id },
    data: { title, description, category },
  });

  return NextResponse.json(updatedBlog, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  await prisma.blog.delete({
    where: { id },
  });

  return NextResponse.json({ message: 'Blog deleted successfully' }, { status: 200 });
}
