import { NextRequest, NextResponse } from 'next/server'
import { query } from '../../../lib/db'

export async function GET() {
  const { rows } = await query('SELECT * FROM notes ORDER BY id')
  return NextResponse.json(rows)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { title, content, parentId } = data
  const { rows } = await query('INSERT INTO notes (title, content, parent_id) VALUES ($1, $2, $3) RETURNING *', [title, content, parentId])
  return NextResponse.json(rows[0])
}
