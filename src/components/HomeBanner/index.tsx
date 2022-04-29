import Link from 'next/link'
import TypeAnimation from 'react-type-animation'
import Avatar from '../Avatar'
import InsertionPointer, { ColorAnimation, SpaceHolder } from './styles'

const HomeBanner: React.FC = () => {
  const color = 'from-cyan-500 to-blue-500'
  const interval = 3000

  return (
    <Link href="/about" passHref>
      <section className="relative my-32 flex items-center justify-between 2xl:px-20">
        <div className="cursor-pointer">
          <span className="ml-1 text-sm tracking-wide text-gray-300 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Hello, I&#8216;m
          </span>
          <h1 className="text-3xl font-bold tracking-wide text-gray-300 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Bruno Genaro
          </h1>
          <ColorAnimation className="flex items-center">
            <TypeAnimation
              cursor
              wrapper="h2"
              repeat={Infinity}
              sequence={[
                'Senior Software Engineer',
                interval,
                'JavaScript Consultant',
                interval,
                'CEO at WebSolutionsFL',
                interval,
                'Speaker',
                interval,
                'Event Producer',
                interval,
                'OrlandoJS Meetup Co-Organizer',
                interval,
                'Father to two beautiful daughters',
                100,
                'beautiful daughters',
                interval,
              ]}
              className={`bg-gradient-to-br ${color} bg-clip-text pb-3 text-3xl font-bold tracking-wide text-transparent sm:text-4xl md:text-5xl lg:text-6xl`}
            />

            <InsertionPointer className={`bg-gradient-to-br ${color}`} />
          </ColorAnimation>
        </div>
        <SpaceHolder />
        <div className="cursor-pointer">
          <Avatar />
        </div>
      </section>
    </Link>
  )
}

export default HomeBanner
