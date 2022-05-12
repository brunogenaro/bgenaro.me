import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: process.env.SENDGRID_EMAIL_TO || '', // Change to your recipient
      from: process.env.SENDGRID_EMAIL_FROM || '', // Change to your verified sender
      subject: req.body.subject,
      text: req.body.message,
      html: `<span>${req.body.message}</span>
      <br>
      <b>${req.body.name}</b>`,
    })
    return res.status(200).send('Email sent successfully')
  } catch (error: unknown) {
    return res.status(400).send(error)
  }
}

export default sendEmail
