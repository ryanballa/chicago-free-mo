import React from 'react'
import styled, { css } from 'react-emotion'
import AnchorButton from '../components/anchorButton'

const StyledSection = styled('section')({
    '& h1' : {
        color: '#0A424E'
    }
})

const Block = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
)

export default Block


