import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const memoryStore: unknown[] = [];

const storagePath = path.join(process.cwd(), 'booking-requests.dev.json');

export async function POST(request: Request) {
  const payload = await request.json();

  if (process.env.NODE_ENV === 'development') {
    const existing = await readExisting();
    existing.push({ ...payload, receivedAt: new Date().toISOString() });
    await fs.writeFile(storagePath, JSON.stringify(existing, null, 2), 'utf8');
  } else {
    memoryStore.push({ ...payload, receivedAt: new Date().toISOString() });
  }

  return NextResponse.json({ status: 'ok' }, { status: 200 });
}

async function readExisting() {
  try {
    const content = await fs.readFile(storagePath, 'utf8');
    return JSON.parse(content) as unknown[];
  } catch {
    return [] as unknown[];
  }
}
