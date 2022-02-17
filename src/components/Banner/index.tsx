import Image from 'next/image'
import TypeAnimation from 'react-type-animation'
import ImageContainer, { ImageBorder, InsertionPointer } from './style'

const Banner: React.FC = () => (
  <section className="flex items-center justify-center py-10">
    <div className=" mr-50">
      <span className="ml-1 text-3xl tracking-wide text-gray-300">
        Hello, Im
      </span>
      <h1 className="text-8xl font-bold tracking-wide text-gray-300">
        Bruno Genaro
      </h1>
      <div className="flex items-center">
        <h2 className=" bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-8xl font-bold tracking-wide text-transparent">
          <TypeAnimation
            cursor
            sequence={['speaker', 3000, 'developer', 3000, 'father', 3000]}
            repeat={Infinity}
          />
        </h2>
        <InsertionPointer className="bg-gradient-to-br from-cyan-500 to-blue-500" />
      </div>
    </div>
    <ImageBorder className="ml-36 bg-gradient-to-br from-cyan-500 to-blue-500  shadow-lg shadow-cyan-500/50">
      <ImageContainer>
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
