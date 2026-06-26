'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiryEmail(formData) {
  try {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const notificationEmail = process.env.NOTIFICATION_EMAIL;

    // Check if variables are set
    if (!notificationEmail || !process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder') {
      console.warn("Resend API key or Notification Email is not configured. Skipping email send.");
      // Return success true anyway to not block the user from going to WhatsApp during testing
      return { success: true, warning: "Email skipped due to missing config." };
    }

    const { data, error } = await resend.emails.send({
      from: 'Touch The Sky <onboarding@resend.dev>', 
      to: [notificationEmail],
      subject: `New Inquiry from ${name}`,
      text: `
You have received a new inquiry from Touch The Sky Japan.

Name: ${name}
Email: ${email}
Message/Dates:
${message}
      `,
    });

    if (error) {
      console.error("Failed to send email:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Action error:", error);
    return { success: false, error: error.message };
  }
}
