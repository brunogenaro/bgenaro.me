import Image from 'next/image'
import TypeAnimation from 'react-type-animation'
import ImageContainer, { ImageBorder, InsertionPointer } from './styles'

const Banner: React.FC = () => (
  <section className="flex items-center justify-between 2xl:px-20">
    <div>
      <span className="ml-1 text-sm tracking-wide text-gray-300 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        Hello, I&apos;m
      </span>
      <h1 className="text-3xl font-bold tracking-wide text-gray-300 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        Bruno Genaro
      </h1>
      <div className="flex items-center">
        <h2 className=" bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-3xl font-bold tracking-wide text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <TypeAnimation
            cursor
            sequence={['speaker', 3000, 'developer', 3000, 'father', 3000]}
            repeat={Infinity}
          />
        </h2>
        <InsertionPointer className="bg-gradient-to-br from-cyan-500 to-blue-500" />
      </div>
    </div>
    <ImageBorder className="flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50">
      <ImageContainer className=" overflow-hidden rounded-full">
        <Image
          src="/assets/image/bruno.jpeg"
          alt="Bruno Genaro Picture"
          width={350}
          height={350}
          objectFit="cover"
        />
      </ImageContainer>
    </ImageBorder>
  </section>
)

export default Banner
