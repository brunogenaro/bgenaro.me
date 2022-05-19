import React, { useEffect, useRef, useState } from 'react'
import { Textfit } from 'react-textfit'
import * as THREE from 'three'
import RINGS from 'vanta/dist/vanta.net.min'
import GradientText from '../GradientText'

export interface iBanner {
  title: string
  subtitle: string
  backgroundColor: string
  textGradient: string[]
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
    <>
      <div
        ref={vantaRef}
        className="hidden sm:grid mb-10 h-52 grid-cols-12 grid-rows-6 overflow-hidden rounded-2xl p-10  pt-0 "
      >
        <div className="col-span-full col-start-2 row-start-2">
          <GradientText
            margin="-mb-3"
            gradient={textGradient}
            size="text-7xl"
            breakPoints="md:text-8xl xl:text-9xl"
          >
            <Textfit mode="single">{title}</Textfit>
          </GradientText>
          <p className="pl-10 text-lg leading-6  lg:leading-7 xl:text-xl  xl:leading-8 2xl:text-3xl">
            <Textfit mode="multi">{subtitle}</Textfit>
          </p>
        </div>
      </div>
      <div className=" block sm:hidden">
        <GradientText
          margin="my-5"
          gradient={textGradient}
          size="text-3xl"
          breakPoints=""
        >
          {title}
        </GradientText>
      </div>
    </>
  )
}
export default Banner
