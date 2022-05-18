import { Form, Formik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import FormField from '../FormField'
import SubmitSchema from './SubmitSchema'

export interface iFormData {
  name: string
  email: string
  message: string
  subject: string
}

const ContactMeSection: React.FC = () => {
  const initialValues: iFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const handleSubmit = async ({ name, email, message, subject }: iFormData) => {
    const request = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email,
        name,
        subject,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      // eslint-disable-next-line no-shadow
    })
    if (request.status === 200) {
      toast.success('Message sent successfully')
    } else {
      toast.error('Message failed to send')
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SubmitSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Toaster />
          <div className="grid grid-cols-2 grid-rows-6 gap-4">
            <FormField
              name="name"
              type="text"
              errors={errors.name}
              touched={touched.name}
              customClass="col-auto"
            />
            <FormField
              name="email"
              type="text"
              errors={errors.email}
              touched={touched.email}
              customClass="col-auto"
            />
            <FormField
              name="subject"
              type="text"
              errors={errors.subject}
              touched={touched.subject}
              customClass="col-span-2"
            />
            <FormField
              name="message"
              type="text"
              as="textarea"
              errors={errors.message}
              touched={touched.message}
              customClass="col-span-2 row-start-3 row-span-5 h-96"
              fieldCustomClass="h-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              className={
                Object.keys(errors).length > 0 ||
                Object.keys(touched).length < 3
                  ? `mt-10 box-content cursor-not-allowed rounded-xl border-2  border-blue-900 p-3 text-xl  font-bold text-blue-900 `
                  : `mt-10 box-content rounded-xl border-2 border-blue-500  p-3 text-xl font-bold  text-blue-500 duration-200 ease-in-out scale-101`
              }
              type="submit"
            >
              Send Message
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactMeSection
