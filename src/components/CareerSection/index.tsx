import React, { useState } from 'react'

export interface iCareer {
  title: string
  description: string
  company: {
    name: string
    url: string
  }
  date: string
}

export interface iCareerSection {
  career: iCareer[]
}

const CareerSection: React.FC<iCareerSection> = ({
  career,
}: iCareerSection) => {
  const [activeItem, setActiveItem] = useState(career[0])

  const isActive = (item: iCareer) =>
    activeItem.company.name === item.company.name

  return (
    <section className="mt-10 grid grid-cols-12 text-xl leading-8 tracking-wider">
      <ul className=" col-start-1 col-span-2 lg:col-span-2 lg:col-start-3 mt-16 text-right">
        {career.map(item => (
          <li className="flex justify-end" key={item.company.name}>
            <button
              onClick={() => {
                setActiveItem(item)
              }}
              type="button"
              className={`cursor-pointer border-r-2 border-gray-300 px-5 py-1  ${
                isActive(item) && 'border-blue-500 text-blue-500 '
              }`}
            >
              <span className="transition-all delay-200 ease-in-out hover:text-2xl  hover:text-blue-500">
                {item.company.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="col-span-9 col-start-4 lg:col-span-6 lg:col-start-6">
        <header>
          <h3 className="mb-5 text-3xl font-bold">Career</h3>
          <h4>
            <span className="mr-3 font-bold">{activeItem.title}</span>
            <a
              href={activeItem.company.url}
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              @{activeItem.company.name}
            </a>
          </h4>
          <time className="text-base">{activeItem.date}</time>
        </header>
        <p className="mt-5">{activeItem.description}</p>
      </div>
    </section>
  )
}

export default CareerSection
