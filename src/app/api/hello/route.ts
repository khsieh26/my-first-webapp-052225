import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

export async function GET() {
  const result = await supabase
    .from('items')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (result.error) {
    return NextResponse.json({ error: result.error.message }, { status: 500 });
  }
  
  return NextResponse.json({
    message: 'Data retrieved from real database!',
    time: new Date().toISOString(),
    items: result.data || [],
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }
    
    const result = await supabase
      .from('items')
      .insert([{ 
        name: body.name,
        description: body.description || '',
      }])
      .select();
      
    if (result.error) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      message: 'Item created!',
      item: result.data[0]
    });
  } catch (err) {
    console.error('Error processing request:', err);
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}