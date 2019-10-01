import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const ConvenientlyCut = () => (
  <div>
    <div className="Cut">
      <div className="CutGroup">
        <h1>Conveniently Cut</h1>
        <p>Design. Cut. Apply.</p>
        <Link to="/contact/">Request A Quote</Link>
        <Wave />
      </div>
    </div>

    <div className="Cards2">
      <h2>OUR WORK</h2>
      <p>Our Vinyl is precisely cut with professional grade machines, <br></br>so that you can be confident in the quality and accuracy of your Vinyl Cuts.</p>
      <div className="CardGroup2">
        <Card 
          title="Example 1"
          image='/images/Flickr.jpg' />
        <Card 
          title="Example 2"
          image='/images/Vine.jpg' />
        <Card
          title="Example 3"
          image='/images/Instagram.jpg' />
        <Card 
          title="Example 4"
          image='/images/Turquoise flow.jpg' />
        <Card 
          title="Example 5"
          image='/images/Virgin America.jpg' />
        <Card
          title="Example 6"
          image='/images/Purple-Blue-gradient.jpg' />
      </div>
    </div>
  </div>
)

export default ConvenientlyCut
