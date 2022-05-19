import Image from 'next/image'
import React from 'react'
import GradientBackground, { BackgroundMask } from './styles'

interface iAvatar {
  src?: string
  alt?: string
  gradient?: string[]
}
const Avatar = ({ src, alt, gradient }: iAvatar) => (
  <GradientBackground gradient={gradient || ['#3B82F6', '#06b6d4']}>
    <BackgroundMask>
      <Image
        src={src || ''}
        alt={alt}
        objectFit="cover"
        width="100%"
        height="100%"
        layout="responsive"
        priority
      />
    </BackgroundMask>
  </GradientBackground>
)

Avatar.defaultProps = {
  src: '/assets/image/bitmap/bruno/bruno.jpeg',
  alt: 'Bruno Genaro Picture',
  gradient: ['#3B82F6', '#06b6d4'],
}
export default Avatar
