import * as Yup from 'yup'

export const SubmitSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('required'),
  email: Yup.string().email('Invalid email').required('required'),
  subject: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('required'),
  message: Yup.string()
    .min(25, 'Too Short!')
    .max(1100, 'Too Long!')
    .required('required'),
})

export default SubmitSchema
