import React from 'react'
import { Link } from 'gatsby'

/*background: #2DD2F6;
border: 2px solid #0A7289;
box-sizing: border-box;
border-radius: 4px; */

const AnchorButton = ({ location, title }) => (
  <Link to={location}>{title}</Link>
)

export default AnchorButton
