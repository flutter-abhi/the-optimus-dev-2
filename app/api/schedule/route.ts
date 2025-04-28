import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
})

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { meetingType, date, time, email, name } = body

        // Validate required fields
        if (!meetingType || !date || !time || !email || !name) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Format the date and time
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })

        // Create calendar event
        const calendarEvent = {
            start: {
                dateTime: new Date(`${date}T${time}`).toISOString(),
                timeZone: 'Asia/Kolkata',
            },
            end: {
                dateTime: new Date(new Date(`${date}T${time}`).getTime() + 30 * 60000).toISOString(),
                timeZone: 'Asia/Kolkata',
            },
            summary: `Meeting with ${name}`,
            description: `Meeting Type: ${meetingType}\nClient: ${name}\nEmail: ${email}`,
            attendees: [
                { email: process.env.EMAIL_USER },
                { email: email },
            ],
        }

        // Send confirmation email to client
        const clientEmail = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Meeting Scheduled - OptimusDev',
            html: `
        <h1>Meeting Scheduled</h1>
        <p>Dear ${name},</p>
        <p>Your meeting has been scheduled successfully.</p>
        <p><strong>Meeting Details:</strong></p>
        <ul>
          <li>Type: ${meetingType}</li>
          <li>Date: ${formattedDate}</li>
          <li>Time: ${time}</li>
        </ul>
        <p>We look forward to meeting with you!</p>
        <p>Best regards,<br>OptimusDev Team</p>
      `,
        }

        // Send notification email to admin
        const adminEmail = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Meeting Scheduled',
            html: `
        <h1>New Meeting Scheduled</h1>
        <p><strong>Client Details:</strong></p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Meeting Type: ${meetingType}</li>
          <li>Date: ${formattedDate}</li>
          <li>Time: ${time}</li>
        </ul>
      `,
        }

        // Send emails
        await Promise.all([
            transporter.sendMail(clientEmail),
            transporter.sendMail(adminEmail),
        ])

        return NextResponse.json(
            { message: 'Meeting scheduled successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error scheduling meeting:', error)
        return NextResponse.json(
            { error: 'Failed to schedule meeting' },
            { status: 500 }
        )
    }
} 