import React from 'react'
import styled from 'styled-components'
import COLORS from './colors'

const ColorText = styled.div`
  color: ${COLORS.mint};
  font-size: ${(props) => props.fontSize};
`

const ColorContainer = ({content, size}) => {
  return (
    <ColorText fontSize={size}>{content}</ColorText>
  )
}

export default ColorContainer