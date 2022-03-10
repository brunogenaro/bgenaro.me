import styled from 'styled-components'

interface iSmartShadowPosition {
  width: number
  height: number
}

export const SmartShadowPosition = styled.div<iSmartShadowPosition>`
  margin-top: ${props => props.height * 0.1}px;
  margin-left: -${props => props.width / 1.1}px;
`

export default SmartShadowPosition
