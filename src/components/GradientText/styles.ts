import styled from 'styled-components'

interface iGradient {
  colors: string[]
}

const Gradient = styled.h3<iGradient>`
  background: ${({ colors }) =>
    `-webkit-linear-gradient( ${colors.join(', ')})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default Gradient
