import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    justify-self: center;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: grey;
    max-width: 500px;
    margin: 15px auto;
`
const Button = styled.button`
    background: #56CCF2;
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`
const LinkGroup = styled.div`
    width: 350px;
    margin: 75px auto;
    display: grid;
    font-size: 16px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    align-items: center;
    text-align: center;
    padding-bottom: 2px;

    a {
        transition: 0.8s;
    }

    a:hover {
        color: black;
    }
`

const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 10px;
    font-size: 16px;
`

const Footer = ({data, children}) => (
    <FooterGroup>
      <Text>Questions? Comments?</Text>
      <Button>Lets get in touch</Button>
      {/* <LinkGroup> 
        <a href="mailto:andy@theconvenientcompany.com">Contact Us</a>
      </LinkGroup> */}
      <LinkGroup>{data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}</LinkGroup>
      <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer