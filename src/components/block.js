import React from 'react'
import styled, { css } from 'react-emotion'
import AnchorButton from '../components/anchorButton'

const StyledSection = styled('section')({
    '& h1' : {
        color: '#0A424E',
        fontSize: '28px',
        fontWeight: 'lighter',
    },
    '& p': {
      fontSize: '14px',
      lineHeight: '1.5',
    },
    color: '#4B4B4B',
    margin: '0 auto',
    maxWidth: '500px',
    textAlign: 'center',
    width: '50%',
})

const Block = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
)

export default Block


