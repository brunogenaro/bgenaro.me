const ContactMe: React.FC = () => (
  <div className="mx-auto mb-28  xl:w-2/3 2xl:w-5/12">
    <div className="pb-10">
      <h2 className="text-4xl font-bold text-gray-300">Contact Me</h2>
      <p className="pt-4 text-xl leading-9 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus
        metus id risus venenatis tincidunt ut in diam. Duis lacinia, neque ac
        porttitor aliquam, nisl tellus lacinia nisi, ac finibus sapien est nec
        odio Aliquam inter.
      </p>
    </div>
    <div className="mb-4 flex">
      <input
        className="mr-4 w-1/2 rounded-xl bg-gray-800 p-5 text-blue-500"
        placeholder="name"
        type="text"
      />
      <input
        className="w-1/2 rounded-xl bg-gray-800 p-5 text-blue-500"
        placeholder="email"
        type="text"
      />
    </div>
    <div className="mb-4">
      <input
        className="w-full rounded-xl bg-gray-800 p-5 text-blue-500"
        placeholder="subjective"
        type="text"
      />
    </div>
    <div>
      <input
        className="h-56 w-full rounded-xl bg-gray-800 p-5 text-blue-500"
        placeholder="message"
        type="text"
      />
    </div>
    <button
      className="mt-4 rounded-3xl border-2 border-blue-500 p-3 text-xl font-bold  text-blue-500"
      type="button"
    >
      send message
    </button>
  </div>
)

export default ContactMe
