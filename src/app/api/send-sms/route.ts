import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, message, type = 'notification' } = await request.json();

    if (!phoneNumber || !message) {
      return NextResponse.json(
        { error: 'Phone number and message are required' },
        { status: 400 }
      );
    }

    // Format phone number (remove non-digits and ensure proper format)
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    const formattedPhone = cleanPhone.startsWith('1') ? cleanPhone : `1${cleanPhone}`;

    // SMS API integration (example using a generic SMS service)
    const smsData = {
      to: formattedPhone,
      message: message,
      type: type,
    };

    // Replace with your actual SMS service API call
    const response = await fetch('https://api.smsservice.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SMS_API_KEY}`,
      },
      body: JSON.stringify(smsData),
    });

    if (!response.ok) {
      throw new Error('Failed to send SMS');
    }

    const result = await response.json();

    // Log the SMS for tracking
    console.log('SMS sent:', {
      to: formattedPhone,
      type: type,
      timestamp: new Date().toISOString(),
      messageId: result.id,
    });

    return NextResponse.json({
      success: true,
      messageId: result.id,
      message: 'SMS sent successfully',
    });
  } catch (error) {
    console.error('SMS sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send SMS' },
      { status: 500 }
    );
  }
}

// GET endpoint to check SMS delivery status
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const messageId = searchParams.get('messageId');

  if (!messageId) {
    return NextResponse.json(
      { error: 'Message ID required' },
      { status: 400 }
    );
  }

  try {
    // Check SMS delivery status
    const response = await fetch(`https://api.smsservice.com/status/${messageId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.SMS_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get SMS status');
    }

    const status = await response.json();

    return NextResponse.json({
      messageId: messageId,
      status: status.delivery_status,
      timestamp: status.delivered_at,
    });
  } catch (error) {
    console.error('SMS status check error:', error);
    return NextResponse.json(
      { error: 'Failed to check SMS status' },
      { status: 500 }
    );
  }
}