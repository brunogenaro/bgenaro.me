import React, { useState } from 'react'

interface iCareer {
  title: string
  description: string
  company: {
    name: string
    url: string
  }
  date: string
}

const CareerSection: React.FC = () => {
  const Career: iCareer[] = [
    {
      title: 'Chief Executive Officer',
      description:
        'Worked as Developer and Managing Developers in multiple projects from small to large clients.',
      company: {
        name: 'WebSolutionsFL',
        url: 'https://www.websolutionsfl.com/',
      },
      date: 'mar 2013 - present',
    },
    {
      title: 'Senior Software Engineer',
      description:
        'Developed the Developers Documentation and Tools to help devs use their API. Worked with technologies such as React.js, Next.js, Node.js, Apollo, GraphQL, Styled Components and Cypress.io.',
      company: { name: 'Mapped', url: 'https://www.mapped.com/' },
      date: 'dez 2020 - present',
    },
    {
      title: 'Senior Software Engineer',
      description:
        'Developed the new Webex Marketplace (App Hub) to increase customer engagement of Webex Collaboration apps through its platform adoption. Responsible for key product features in Webex Teams enterprise collaboration app, launch, and growth of Webex App store. Developed the new Developer Portal. I was responsible for all the UI/UX and also development integration for the Blog and API Changelog.',
      company: { name: 'Cisco Sytems', url: 'https://www.cisco.com/' },
      date: 'mai 2016 - nov 2020',
    },
    {
      title: 'Lead Front-End / Mobile App Developer',
      description:
        'Managed the Front-End team focusing on workow improvements and best practices. Developed multiple native mobile applications (Android and iOS) using Appcelerator Titanium and Alloy framework. Managed and maintained mid to large-scale JavaScript applications using BackboneJS and AngularJS. Integrated web and mobile applications with RESTful APIs. Integrated third-party APIs, such as Google Maps, Facebook and Twitter. Developed custom websites using Wordpress. Developed custom Themes, Plugins and Post Types/Fields for Wordpress. Managed and maintained PHP websites using MySQL database. Created user interfaces from strict requirements with JavaScript, jQuery, HTML5, CSS3, Sass, Bootstrap and Foundation. Used Node.js solutions for development workflow using NPM, Yeoman, Bower Grunt and Gulp. Implemented new workow processes including GruntJS, Sass, and JavaScript linters.',
      company: { name: 'Concepta', url: 'https://www.conceptatech.com/' },
      date: 'mai 2013 - mai 2016',
    },
    {
      title: 'Lead Full Stack Developer',
      description: '',
      company: {
        name: 'WebServConsulting',
        url: 'http://www.webservconsulting.com/',
      },
      date: 'dez 2011 - jan 2013',
    },
    {
      title: 'Web Developer',
      description: '',
      company: {
        name: 'Triade Tecnologia',
        url: 'https://www.triadetecnologia.com.br/',
      },
      date: 'mar 2008 - mar 2011 ',
    },
  ]

  const [activeItem, setActiveItem] = useState(Career[0])

  const isActive = (item: iCareer) =>
    activeItem.company.name === item.company.name

  return (
    <section className="mt-10 grid grid-cols-12 text-xl leading-8 tracking-wider">
      <ul className="col-span-2 col-start-2 mt-16 text-right">
        {Career.map(item => (
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
      <div className="col-span-6 col-start-5">
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
