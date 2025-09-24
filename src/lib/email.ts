import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendJobAlert(to: string, subject: string, text: string) {
  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM!, // jaise onboarding@resend.dev
      to,
      subject,
      text,
    });
    console.log(`✅ Job alert email sent to ${to}`);
    return { success: true };
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    return { success: false };
  }
}
