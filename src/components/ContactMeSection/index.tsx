import axios from 'axios'
import { Form, Formik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import FormField from '../FormField'
import SubmitSchema from './SubmitSchema'

interface iFormData {
  name: string
  email: string
  message: string
  subject: string
}

const ContactMeSection: React.FC = () => {
  const mailto = 'hello@bgenaro.me'
  const submit = ({ subject, email, message, name }: iFormData) => {
    toast
      .promise(
        axios.post(`https://nodemailer-dev.herokuapp.com/send`, {
          email: mailto,
          subject: `${subject}`,
          body: `${name} - ${email} <br/><br/> ${message}`,
        }),
        {
          loading: 'Sending...',
          success: (
            <span className="bold text-xl font-bold tracking-wider text-green-500">
              E-mail sent successfully!
            </span>
          ),
          error: (
            <span className="text-xl font-bold tracking-wider text-red-500">
              Something went wrong.
              <br />
              Try again later
            </span>
          ),
        },
      )
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      validationSchema={SubmitSchema}
      onSubmit={submit}
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
