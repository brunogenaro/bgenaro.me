import Image from 'next/image'
import React from 'react'
import SmartShadowPosition from './styles'

interface iImageShadow {
  src: string
  alt: string
  width: number
  height: number
}

const ImageShadow = ({ src, alt, width, height }: iImageShadow) => (
  <div className="flex">
    <div className="z-10">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit="cover"
      />
    </div>
    <SmartShadowPosition
      width={width}
      height={height}
      className="opacity-25 blur-lg brightness-0"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit="cover"
      />
    </SmartShadowPosition>
  </div>
)

export default ImageShadow
