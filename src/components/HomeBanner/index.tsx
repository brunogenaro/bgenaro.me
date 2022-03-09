import { useEffect, useState } from 'react'
import TypeAnimation from 'react-type-animation'
import Avatar from '../Avatar'
import InsertionPointer from './styles'

const HomeBanner: React.FC = () => {
  const [color, setColor] = useState('from-cyan-500 to-blue-500')
  const interval = 3000

  return (
    <section className="flex items-center justify-between 2xl:px-20">
      <div>
        <span className="ml-1 text-sm tracking-wide text-gray-300 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Hello, I&apos;m
        </span>
        <h1 className="text-3xl font-bold tracking-wide text-gray-300 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Bruno Genaro
        </h1>
        <div className="flex items-center">
          <h2
            className={`bg-gradient-to-br ${color} bg-clip-text text-3xl font-bold tracking-wide text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            <TypeAnimation
              cursor
              sequence={[
                'speaker',
                interval,
                'developer',
                interval,
                'father',
                interval,
              ]}
              repeat={Infinity}
            />
          </h2>
          <InsertionPointer className={`bg-gradient-to-br ${color}`} />
        </div>
      </div>
      <Avatar src="/assets/image/bruno.jpeg" alt="Bruno Genaro Picture" />
    </section>
  )
}

export default HomeBanner
