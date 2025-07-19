import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, message, type = 'text', templateName, templateParams } = await request.json();

    if (!phoneNumber || (!message && !templateName)) {
      return NextResponse.json(
        { error: 'Phone number and message/template are required' },
        { status: 400 }
      );
    }

    // Format phone number for WhatsApp (remove non-digits)
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    const formattedPhone = cleanPhone.startsWith('1') ? cleanPhone : `1${cleanPhone}`;

    let whatsappData;

    if (templateName) {
      // Send template message
      whatsappData = {
        messaging_product: 'whatsapp',
        to: formattedPhone,
        type: 'template',
        template: {
          name: templateName,
          language: {
            code: 'en_US'
          },
          components: templateParams ? [
            {
              type: 'body',
              parameters: templateParams.map((param: string) => ({
                type: 'text',
                text: param
              }))
            }
          ] : []
        }
      };
    } else {
      // Send text message
      whatsappData = {
        messaging_product: 'whatsapp',
        to: formattedPhone,
        type: 'text',
        text: {
          body: message
        }
      };
    }

    // WhatsApp Business API call
    const response = await fetch('https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.WHATSAPP_API_KEY}`,
      },
      body: JSON.stringify(whatsappData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`WhatsApp API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const result = await response.json();

    // Log the WhatsApp message for tracking
    console.log('WhatsApp message sent:', {
      to: formattedPhone,
      type: type,
      timestamp: new Date().toISOString(),
      messageId: result.messages?.[0]?.id,
    });

    return NextResponse.json({
      success: true,
      messageId: result.messages?.[0]?.id,
      message: 'WhatsApp message sent successfully',
    });
  } catch (error) {
    console.error('WhatsApp sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send WhatsApp message' },
      { status: 500 }
    );
  }
}

// GET endpoint to check WhatsApp message status
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
    // Check WhatsApp message status
    const response = await fetch(`https://graph.facebook.com/v18.0/${messageId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get WhatsApp message status');
    }

    const status = await response.json();

    return NextResponse.json({
      messageId: messageId,
      status: status.status,
      timestamp: status.timestamp,
    });
  } catch (error) {
    console.error('WhatsApp status check error:', error);
    return NextResponse.json(
      { error: 'Failed to check WhatsApp message status' },
      { status: 500 }
    );
  }
}