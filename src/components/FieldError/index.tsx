interface iFieldError {
  message: string
}

const FieldError: React.FC<iFieldError> = ({ message }: iFieldError) => (
  <span className="text-red-500">{message}</span>
)

export default FieldError
