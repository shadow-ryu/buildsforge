import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        // Exclude sensitive info like clerkId
      }
    });
    
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

// POST - create a new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.clerkId || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields: clerkId and email are required' },
        { status: 400 }
      );
    }
    
    // Check if user with same clerkId or email already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { clerkId: body.clerkId },
          { email: body.email }
        ]
      }
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this clerkId or email already exists' },
        { status: 409 }
      );
    }
    
    const newUser = await prisma.user.create({
      data: {
        clerkId: body.clerkId,
        email: body.email,
        name: body.name || null,
      }
    });
    
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
