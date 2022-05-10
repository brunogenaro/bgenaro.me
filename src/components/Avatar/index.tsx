import Image from 'next/image'
import React from 'react'
import ImageContainer from './styles'

interface iAvatar {
  src?: string
  alt?: string
}
const Avatar = ({ src, alt }: iAvatar) => (
  <ImageContainer className="overflow-hidden rounded-2xl w-full h-full">
    <Image
      src={src || ''}
      alt={alt}
      objectFit="cover"
      width="100%"
      height="100%"
      layout="responsive"
    />
  </ImageContainer>
)

Avatar.defaultProps = {
  src: '/assets/image/bitmap/bruno/bruno.jpeg',
  alt: 'Bruno Genaro Picture',
}
export default Avatar
