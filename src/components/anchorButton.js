import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

const StyledSpan = styled('span')(props => ({
  '& a': {
    color: (props.intention === 'inverse' ? '#0A7289': '#F9F9F9'),
    textDecoration: 'none',
  },
  background: (props.intention === 'inverse' ? '#F5F5F5' : '#2DD2F6'),
  border: (props.intention !== 'inverse') && '2px solid #0A7289',
  boxSizing: 'borderBox',
  borderRadius: '4px',
  padding: '10px',
}));

const AnchorButton = ({ intention, location, size, title }) => (
  <StyledSpan intention={intention} size={size}>
    <Link to={location}>{title}</Link>
  </StyledSpan>
)

export default AnchorButton
