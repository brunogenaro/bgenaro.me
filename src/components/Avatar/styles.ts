import styled from 'styled-components'

const ImageContainer = styled.div`
  left: 6px;
  top: 6px;
  @media (max-width: 640px) {
    width: 140px;
    height: 140px;
  }

  @media (min-width: 640px) {
    width: 140px;
    height: 140px;
  }
  @media (min-width: 768px) {
    width: 210px;
    height: 210px;
  }

  @media (min-width: 1024px) {
    width: 240px;
    height: 240px;
  }

  @media (min-width: 1280px) {
    width: 280px;
    height: 280px;
  }

  @media (min-width: 1536px) {
    width: 300px;
    height: 300px;
  }

  width: 350px;
  height: 350px;
`

export const ImageBorder = styled.div`
  @keyframes ColorAnimation {
    0% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(360deg);
    }
    100% {
      filter: hue-rotate(0deg);
    }
  }
  animation: ColorAnimation 100s infinite;

  @media (max-width: 640px) {
    width: 152px;
    height: 152px;
  }

  @media (min-width: 640px) {
    width: 152px;
    height: 152px;
  }
  @media (min-width: 768px) {
    width: 222px;
    height: 222px;
  }

  @media (min-width: 1024px) {
    width: 252px;
    height: 252px;
  }

  @media (min-width: 1280px) {
    width: 292px;
    height: 292px;
  }

  @media (min-width: 1536px) {
    width: 312px;
    height: 312px;
  }

  width: 362px;
  height: 362px;
`

export const AvatarPosition = styled.div`
  position: absolute;
  top: 0;

  @media (max-width: 640px) {
    right: 140px;
  }

  @media (min-width: 640px) {
    right: 140px;
  }
  @media (min-width: 768px) {
    right: 210px;
  }

  @media (min-width: 1024px) {
    right: 240px;
  }

  @media (min-width: 1280px) {
    right: 280px;
  }

  @media (min-width: 1536px) {
    right: 300px;
  }
`
export default ImageContainer
