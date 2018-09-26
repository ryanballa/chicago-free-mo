import React from 'react'

import Layout from '../components/layout'
import HeroBanner from '../components/heroBanner'
import Block from '../components/block'

const IndexPage = () => (
  <Layout>
    <HeroBanner
      actionTitle="Learn More"
      title="Bring Your Own Layout" 
      subtitle="Model Railroading for those with limited space and time" 
    />
    <Block>
      <h1>What is Free-Mo?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Block>
  </Layout>
)

export default IndexPage
