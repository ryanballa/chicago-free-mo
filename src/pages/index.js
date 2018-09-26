import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

import Layout from '../components/layout'
import AnchorButton from '../components/anchorButton'

const Container = styled('section')`
  background: #333;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <h1>Bring Your Own Layout</h1>
      <h2>Model railroading for those with limited space and time</h2>
      <AnchorButton location="#" title="Learn More" />
    </Container>
  </Layout>
)

export default IndexPage
