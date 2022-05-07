import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.net.min'
import Avatar from '../Avatar'
import { SpaceHolder } from './styles'

const HomeBanner: React.FC = () => {
  const color = 'from-cyan-500 to-blue-500'
  const interval = 3000

  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3b82f6,
          backgroundColor: 0x111827,
          showDots: true,
          points: 20.0,
          maxDistance: 20.0,
          spacing: 20.0,
        }),
      )
    }
    return () => {
      if (vantaEffect) (vantaEffect as any).destroy()
    }
  }, [vantaEffect])

  return (
    <Link href="/about" passHref>
      <section
        className="relative my-10 flex items-center justify-between overflow-hidden rounded-3xl p-20"
        ref={vantaRef}
      >
        <div className="cursor-pointer">
          <span className=" text-sm tracking-wide text-gray-300 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Hello, I&#8216;m
          </span>
          <h1 className="bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-3xl font-bold tracking-wide text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Bruno Genaro
          </h1>
        </div>
        <SpaceHolder />
        <Avatar />
      </section>
    </Link>
  )
}

export default HomeBanner
