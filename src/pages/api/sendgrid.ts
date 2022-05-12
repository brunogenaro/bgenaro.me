import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: 'sowopa9450@akapple.com', // Change to your recipient
      from: 'mcorreadesign@gmail.com', // Change to your verified sender
      subject: req.body.subject,
      text: req.body.message,
      html: `<a href='www.google.com'>${req.body.message}</a>`,
    })
    return res.status(200).send('Email sent successfully')
  } catch (error: unknown) {
    return res.status(400).send(error)
  }
}

export default sendEmail
