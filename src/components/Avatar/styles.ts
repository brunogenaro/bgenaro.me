import styled from 'styled-components'

const ImageContainer = styled.div`
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
  @media (max-width: 640px) {
    width: 160px;
    height: 160px;
  }

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
export default ImageContainer
