import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  return NextResponse.json({
    message: 'Data retrieved from real database!',
    time: new Date().toISOString(),
    items: data || [],
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
    
    const { data, error } = await supabase
      .from('items')
      .insert([{ 
        name: body.name,
        description: body.description || '',
      }])
      .select();
      
    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      message: 'Item created!',
      item: data[0]
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}