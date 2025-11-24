import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const type = formData.get('type') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Determine the folder based on type
    let folder = 'images';
    if (type === 'video') folder = 'videos';
    if (type === 'audio') folder = 'audio';

    // Create safe filename
    const filename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    
    // Save to public folder
    const path = join(process.cwd(), 'public', folder, filename);
    await writeFile(path, buffer);

    return NextResponse.json({ 
      success: true, 
      filename,
      path: `/${folder}/${filename}`
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
