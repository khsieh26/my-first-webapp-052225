import { NextResponse } from 'next/server';

export async function GET() {
  // This could come from a database in a real app
  const data = {
    message: 'Hello from the API!',
    time: new Date().toISOString(),
    features: ['Counter', 'Todo List', 'Snake Game'],
  };
  
  return NextResponse.json(data);
}