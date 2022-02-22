import styled from 'styled-components'

const ImageContainer = styled.div`
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
  @media (min-width: 640px) {
    width: 160px;
    height: 160px;
  }
  @media (min-width: 768px) {
    width: 230px;
    height: 230px;
  }

  @media (min-width: 1024px) {
    width: 260px;
    height: 260px;
  }

  @media (min-width: 1280px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1536px) {
    width: 330px;
    height: 330px;
  }

  width: 370px;
  height: 370px;
`

export const InsertionPointer = styled.span`
  @media (min-width: 640px) {
    width: 5px;
    height: 30px;
    margin-left: -8px;
  }
  @media (min-width: 768px) {
    width: 6px;
    height: 40px;
    margin-left: -10px;
  }

  @media (min-width: 1024px) {
    width: 7px;
    height: 50px;
    margin-left: -10px;
  }

  @media (min-width: 1280px) {
    width: 8px;
    height: 60px;
    margin-left: -15px;
  }

  @media (min-width: 1536px) {
    width: 9px;
    height: 75px;
    margin-left: -20px;
  }

  width: 10px;
  height: 80px;
  margin-left: -25px;

  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  opacity: 1;
  animation: flickerAnimation 2s infinite;
`

export default ImageContainer
