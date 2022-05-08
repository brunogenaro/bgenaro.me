import styled from 'styled-components'

interface iContainer {
  color: string
}

export const Container = styled.div<iContainer>`
  * ::selection {
    background: ${({ color }) => color || '#fff'};
    color: #000;
    -webkit-text-fill-color: #000;
  }
`

export default Container
