import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'
import AnchorButton from '../components/anchorButton'
import driveIn from '../images/driveIn.jpg'

const StyledSection = styled('section')({
    '& .colorFill': {
        background: 'rgba(0, 0, 0, 0.3)',
        height: '100%',
        position: 'absolute',
        width: '100%',
        zIndex: 2,
    },
    '& figure': {
        position: 'absolute',
        zIndex: 1,
    },
    '& .content': {
        '& h1': {
            color: '#F9F9F9',
            fontSize: '36px',
            fontWeight: 'normal',
            marginBottom: '10px',
        },
        '& h2': {
            color: '#F9F9F9',
            fontSize: '22px',
            fontWeight: 'normal',
        },
        paddingTop: '20%',
        position: 'relative',
        zIndex: 3,
    },
    background: '#ccc',
    position: 'relative',
    textAlign: 'center',
})

const HeroBanner = ({ actionLocation, actionTitle, title, subtitle }) => (
  <StyledSection>
      <figure>
        <div className="colorFill" />
        <img src={driveIn} alt="Drive In Theater" />
      </figure>
      <div className="content">
        <hgroup>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </hgroup>
        <AnchorButton location={actionLocation} title={actionTitle} />
      </div>
      
  </StyledSection>
)

export default HeroBanner
