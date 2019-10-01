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

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h2>The</h2>
        <h1>Convenient Company</h1>
        <p>Your IT All-In-One Solution</p>
        <Link to="/page-2/">Contact Us</Link>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>SHOP</h2>
      <p>From selling Refurbished and Pre-loved Apple products to creating high-quality custom vinyl. <br></br>Contact us today!</p>
      <div className="CardGroup">
        <Card 
          title="Shop"
          text="Shop Certified Used and Refurbished Apple Products "
          image='/images/mac-pro.jpg' />
        <Card 
          title="Custom Vinyl"
          text="Professional Quality Prcision-Cut Custom Vinyl"
          image='/images/vinyl.jpg' />
        <Card 
          title="Services"
          text="Apple Certified Technician Repair"
          image='/images/repair2.jpg' />
      </div>
    </div>
    {/* <Section
      image='/images/.jpg'
      logo='/images/.png'
      title=""
      text="."
     />
     <SectionCaption>6 hours</SectionCaption>
     <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell 
          title={cell.title}
          image={cell.image} />
      ))}
     </SectionCellGroup> */}
  </div>
)

export default IndexPage
