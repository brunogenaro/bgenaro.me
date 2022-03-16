import { useState } from 'react'
import TypeAnimation from 'react-type-animation'
import Avatar from '../Avatar'
import InsertionPointer from './styles'

const HomeBanner: React.FC = () => {
  const [color] = useState('from-cyan-500 to-blue-500')
  const interval = 3000

  return (
    <section className="flex items-center justify-between 2xl:px-20">
      <div>
        <span className="ml-1 text-sm tracking-wide text-gray-300 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Hello, I&#8216;;m
        </span>
        <h1 className="text-3xl font-bold tracking-wide text-gray-300 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Bruno Genaro
        </h1>
        <div className="flex items-center">
          <h2
            className={`bg-gradient-to-br ${color} bg-clip-text text-3xl font-bold tracking-wide text-transparent sm:text-4xl md:text-5xl lg:text-6xl `}
          >
            <TypeAnimation
              cursor
              sequence={[
                'Senior Software Engineer',
                interval,
                'JavaScript Consultant',
                'and CEO at WebSolutionsFL',
                interval,
                'Speaker',
                interval,
                'Event Producer',
                interval,
                'OrlandoJS Meetup Co-Organizer',
                interval,
                'Father to two beautiful daughters',
              ]}
              repeat={Infinity}
              className="pb-3"
            />
          </h2>
          <InsertionPointer className={`bg-gradient-to-br ${color}`} />
        </div>
      </div>
      <Avatar />
    </section>
  )
}

export default HomeBanner
