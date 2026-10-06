import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;
    if (!scriptUrl) {
      console.error('GOOGLE_SHEETS_SCRIPT_URL is not set.');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    // Google Apps Script returns a 302 redirect.
    // We use form-encoded body because fetch converts POST→GET on 302,
    // so the Apps Script must also handle GET via doGet, OR we use
    // a workaround: send JSON but follow redirects explicitly.
    const response = await fetch(scriptUrl, {
      method: 'POST',
      redirect: 'follow',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        firstName,
        lastName,
        email,
        message,
      }),
    });

    const text = await response.text();
    console.log('Google Script response:', response.status, text);

    // Treat any non-5xx as success (Apps Script 302s are normal)
    if (response.status >= 500) {
      return NextResponse.json({ error: 'Failed to save submission.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 });
  }
}
