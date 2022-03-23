import styled from 'styled-components'

export const InsertionPointer = styled.span`
  @media (max-width: 640px) {
    width: 5px;
    height: 30px;
    margin-left: -8px;
  }

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

  width: 8px;
  height: 60px;
  margin-left: -15px;

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
export const ColorAnimation = styled.div`
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
`

export default InsertionPointer
