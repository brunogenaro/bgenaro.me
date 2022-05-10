import Link from 'next/link'
import Avatar from '../Avatar'

const HomeBanner: React.FC = () => (
  <section className="my-10 grid grid-cols-12 content-center items-center gap-10">
    <Link href="/about" passHref>
      <div className="col-end-6 col-span-3 cursor-pointer">
        <Avatar />
      </div>
    </Link>
    <Link href="/about" passHref>
      <div className=" col-start-6 col-span-6 cursor-pointer">
        <span className=" text-sm tracking-wide  sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Hello, I&#8216;m
        </span>
        <h1 className="bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-3xl font-bold tracking-wide text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Bruno Genaro
        </h1>
      </div>
    </Link>
  </section>
)

export default HomeBanner
