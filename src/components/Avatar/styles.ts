import styled from 'styled-components'

interface iGradientBackground {
  gradient: string[]
}

const GradientBackground = styled.h3<iGradientBackground>`
  transition: all 0.3s ease-in-out;
  background: ${({ gradient }) =>
    `-webkit-linear-gradient( ${gradient.join(', ')})`};

  box-shadow: 0px 0px 35px 5px ${({ gradient }) => `${gradient[0]}80`};
`

export default GradientBackground
