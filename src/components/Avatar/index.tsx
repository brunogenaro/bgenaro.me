import Image from 'next/image'
import React from 'react'
import ImageContainer from './styles'

interface iAvatar {
  src?: string
  alt?: string
}
const Avatar = ({ src, alt }: iAvatar) => (
  <ImageContainer className="overflow-hidden rounded-2xl">
    <Image
      src={src || ''}
      alt={alt}
      width={350}
      height={350}
      objectFit="cover"
    />
  </ImageContainer>
)

Avatar.defaultProps = {
  src: '/assets/image/bitmap/bruno/bruno.jpeg',
  alt: 'Bruno Genaro Picture',
}
export default Avatar
