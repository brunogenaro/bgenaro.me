import Link from 'next/link'
import Avatar from '../Avatar'
import { SpaceHolder } from './styles'

const HomeBanner: React.FC = () => (
  <Link href="/about" passHref>
    <section className="my-10 flex items-center justify-between overflow-hidden rounded-3xl p-20">
      <Avatar />
      <SpaceHolder />
      <div className="cursor-pointer">
        <span className=" text-sm tracking-wide  sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Hello, I&#8216;m
        </span>
        <h1 className="bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-3xl font-bold tracking-wide text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Bruno Genaro
        </h1>
      </div>
    </section>
  </Link>
)

export default HomeBanner
