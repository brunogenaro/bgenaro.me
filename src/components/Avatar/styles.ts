import styled from 'styled-components'

const ImageContainer = styled.div`
  left: 4px;
  top: 4px;
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
    width: 148px;
    height: 148px;
  }

  @media (min-width: 640px) {
    width: 148px;
    height: 148px;
  }
  @media (min-width: 768px) {
    width: 218px;
    height: 218px;
  }

  @media (min-width: 1024px) {
    width: 248px;
    height: 248px;
  }

  @media (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }

  @media (min-width: 1536px) {
    width: 308px;
    height: 308px;
  }

  width: 358px;
  height: 358px;
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
