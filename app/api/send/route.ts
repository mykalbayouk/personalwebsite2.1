import { EmailTempToMe } from '@/components/email-to-me';
import { EmailResponse } from '@/components/email-to-user';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { userEmail, userName, message } = await request.json();

    console.log(userEmail, userName, message);

    const emailToMe = await resend.emails.send({
      from: `${userName} <mb@michaelbayo.uk>`,
      to: ['michaelbayouk@gmail.com'],
      subject: 'New Contact Form Submission',
      react: await EmailTempToMe({ firstName: userName, email: userEmail, message: message}),
    });

    const emailToUser = await resend.emails.send({
      from: 'Michael Bayouk <mb@michaelbayo.uk>',
      to: [userEmail],
      subject: 'Thank you for contacting Michael',
      react: EmailResponse({ userFirstname: userName }),
    });

    if (emailToMe.error || emailToUser.error) {
      return Response.json({ error: emailToMe.error || emailToUser.error }, { status: 500 });
    }

    return Response.json({ message: 'Emails sent successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}