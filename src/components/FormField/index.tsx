import { Field, FieldProps } from 'formik'
import FieldError from '../FieldError'

interface iFormField {
  errors: string | undefined
  touched: boolean | undefined
  type: string
  name: string
  as?: string | React.ComponentType<FieldProps['field']>
  customClass?: string
  fieldCustomClass?: string
}

const FormField = ({
  errors,
  touched,
  type,
  name,
  as,
  customClass,
  fieldCustomClass,
}: iFormField) => {
  const style = `w-full text-blue-500 p-4 rounded-xl bg-gray-800 placeholder:text-blue-500 text-blue-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
    errors && touched && ' border-2 border-red-500'
  } ${fieldCustomClass}`
  return (
    <div className={`flex-col ${customClass} h-full w-full `}>
      <Field
        className={style}
        placeholder={name}
        name={name}
        as={as}
        type={type}
      />
      {errors && touched && <FieldError message={errors} />}
    </div>
  )
}

FormField.defaultProps = {
  customClass: '',
  fieldCustomClass: '',
  as: 'input',
}

export default FormField
