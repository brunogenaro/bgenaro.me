import { useState } from 'react'

const ContactMeSection: React.FC = () => {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const mailto = 'hello@bgenar.me'

  return (
    <div>
      <div className="pb-10">
        <h2 className="text-4xl font-bold text-gray-300">Contact Me</h2>
        <p className="pt-4 text-xl leading-9 text-gray-300">hello@bgenar.me</p>
      </div>
      <div className="text-xl">
        <div className="mb-4 flex">
          <input
            className="mr-4 w-1/2 rounded-xl bg-gray-800 p-4 text-blue-500 placeholder:text-blue-500"
            placeholder="name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <input
            className="w-1/2 rounded-xl bg-gray-800 p-4 text-blue-500 placeholder:text-blue-500"
            placeholder="email"
            type="text"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full rounded-xl bg-gray-800 p-4 text-blue-500 placeholder:text-blue-500"
            placeholder="subjective"
            type="text"
            onChange={e => setSubject(e.target.value)}
          />
        </div>
        {/* <div>
          <input
            className="h-56 w-full rounded-xl bg-gray-800 p-4 text-blue-500 placeholder:text-blue-500"
            placeholder="message"
            type="text"
            onChange={e => setMessage(e.target.value)}
          />
        </div> */}
      </div>
      <button
        className="mt-5 rounded-3xl border-2 border-blue-500 p-3 text-xl font-bold  text-blue-500"
        type="submit"
        onClick={() => {
          window.location.href = `mailto:${mailto}?subject=${`${name} - ${subject}`} &message=${message}`
        }}
      >
        send message
      </button>
    </div>
  )
}

export default ContactMeSection
