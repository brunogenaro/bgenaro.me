import Image from 'next/image'
import React from 'react'
import GradientBackground from './styles'

interface iAvatar {
  src?: string
  alt?: string
  gradient?: string[]
}
const Avatar = ({ src, alt, gradient }: iAvatar) => (
  <GradientBackground
    className="p-1 rounded-full"
    gradient={gradient || ['#3B82F6', '#06b6d4']}
  >
    <div className="overflow-hidden rounded-full">
      <Image
        src={src || ''}
        alt={alt}
        objectFit="cover"
        width="100%"
        height="100%"
        layout="responsive"
        priority
      />
    </div>
  </GradientBackground>
)

Avatar.defaultProps = {
  src: '/assets/image/bitmap/bruno/bruno.jpeg',
  alt: 'Bruno Genaro Picture',
  gradient: ['#3B82F6', '#06b6d4'],
}
export default Avatar
