import styled from 'styled-components'

const ImageContainer = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
`

export const ImageBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 380px;
  border-radius: 50%;
`

export const InsertionPointer = styled.span`
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
