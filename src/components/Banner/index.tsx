import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import RINGS from 'vanta/dist/vanta.net.min'

interface iBanner {
  title: string
  subtitle: string
  backgroundColor: string
  textGradient: string
}

const Banner: React.FC<iBanner> = ({
  title,
  subtitle,
  backgroundColor,
  textGradient,
}: iBanner) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: backgroundColor,
          backgroundColor: 0x1f293d,
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
    <div
      ref={vantaRef}
      className="mb-10 grid h-48 grid-cols-12 grid-rows-6 overflow-hidden rounded-2xl p-10 sm:h-60 md:h-60 2xl:h-80"
    >
      <div className="col-span-full col-start-2 row-start-2">
        <h3
          className={`mb-2 bg-gradient-to-br ${textGradient} bg-clip-text text-2xl font-bold tracking-wide text-transparent md:text-6xl lg:text-7xl xl:text-9xl`}
        >
          {title}
        </h3>
        <p className="pl-5 text-lg leading-6  lg:leading-7 xl:text-xl  xl:leading-8 2xl:text-3xl">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
export default Banner
