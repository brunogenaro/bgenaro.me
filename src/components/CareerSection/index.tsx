import Image from 'next/image'
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
  const [showItem, setShowItem] = useState(false)
  const isActive = (item: iCareer) =>
    activeItem.company.name === item.company.name

  return (
    <section className="mt-10 grid grid-cols-12 text-xl leading-8 tracking-wider">
      <ul className="hidden md:block col-start-2 col-span-2 lg:col-span-2 lg:col-start-3 mt-16 text-right">
        {career?.map(item => (
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
              <span className="transition-all delay-200 ease-in-out hover:text-2xl  hover:text-blue-500 whitespace-nowrap">
                {item.company.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="block md:hidden">
        <div className="flex items-baseline">
          <h3 className="text-3xl font-bold">Career</h3>
          <span className="ml-2 text-sm whitespace-nowrap ">
            (select to see other companies)
          </span>
        </div>
        <div className="my-3">
          <button
            onClick={() => {
              setShowItem(!showItem)
            }}
            type="button"
            className="flex rounded-md tracking-wider p-2 align-middle text-lg font-bold text-blue-500 duration-200 ease-in-out scale-101 whitespace-nowrap"
          >
            {activeItem.company.name}
            <div className="ml-3 flex self-center">
              <Image
                src={
                  showItem
                    ? '/assets/image/svg/action/up.svg'
                    : '/assets/image/svg/action/down.svg'
                }
                width={24}
                height={24}
                layout="fixed"
              />
            </div>
          </button>
        </div>
        {showItem && (
          <div className="relative">
            <ul className="absolute mt-2 z-10 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
              {career?.map(item => (
                <li key={item.company.name}>
                  <button
                    onClick={() => {
                      setActiveItem(item)
                    }}
                    type="button"
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                  >
                    {item.company.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-10 col-start-1 md:col-span-9 md:col-start-5 lg:col-span-6 lg:col-start-6">
        <header>
          <h3 className="hidden md:block mb-5 text-3xl font-bold">Career</h3>
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
