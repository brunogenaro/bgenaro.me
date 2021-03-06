import styled from 'styled-components'

export const BackgroundMask = styled.div`
  border-radius: 50%;
  overflow: hidden;
`

interface iGradientBackground {
  gradient: string[]
}

const GradientBackground = styled.div<iGradientBackground>`
  border-radius: 50%;
  padding: 4px;
  transition: all 0.3s ease-in-out;
  background: ${({ gradient }) =>
    `-webkit-linear-gradient( ${gradient.join(', ')})`};

  box-shadow: 0px 0px 35px 5px ${({ gradient }) => `${gradient[0]}80`};
`

export default GradientBackground
