import Image from 'next/image'
import React from 'react'
import ImageContainer, { ImageBorder } from './styles'

interface iAvatar {
  src: string
  alt: string
}
const Avatar = ({ src, alt }: iAvatar) => (
  <ImageBorder className="flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50">
    <ImageContainer className=" overflow-hidden rounded-full">
      <Image src={src} alt={alt} width={350} height={350} objectFit="cover" />
    </ImageContainer>
  </ImageBorder>
)

export default Avatar
