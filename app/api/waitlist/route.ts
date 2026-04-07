import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const WAITLIST_FILE = path.join(process.cwd(), 'waitlist.json')

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    let waitlist = []
    if (fs.existsSync(WAITLIST_FILE)) {
      const data = fs.readFileSync(WAITLIST_FILE, 'utf8')
      waitlist = JSON.parse(data)
    }

    if (waitlist.includes(email)) {
      return NextResponse.json({ message: 'Already on the waitlist!' }, { status: 200 })
    }

    waitlist.push(email)
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(waitlist, null, 2))

    return NextResponse.json({ message: 'Successfully joined the waitlist!' }, { status: 200 })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
