import Image from 'next/image'
import React from 'react'
import ImageContainer, { AvatarPosition, ImageBorder } from './styles'

interface iAvatar {
  src?: string
  alt?: string
}
const Avatar = ({ src, alt }: iAvatar) => (
  <AvatarPosition>
    <div className="relative">
      <ImageBorder className="absolute flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50" />
      <ImageContainer className="absolute overflow-hidden rounded-full">
        <Image
          src={src || ''}
          alt={alt}
          width={350}
          height={350}
          objectFit="cover"
        />
      </ImageContainer>
    </div>
  </AvatarPosition>
)

Avatar.defaultProps = {
  src: '/assets/image/bruno.jpeg',
  alt: 'Bruno Genaro Picture',
}
export default Avatar