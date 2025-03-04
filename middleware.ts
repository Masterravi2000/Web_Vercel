import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const authHeader = request.headers.get('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    const apiUrl = `${request.nextUrl.origin}/api/verifytoken`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: `Unauthorized: ${error.error}` }, { status: 401 });
    }
  } catch (error) {
    console.error('Token verification failed:', error);
    return NextResponse.json({ error: 'Unauthorized: Could not verify' }, { status: 401 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/blog/:path*'],
};
