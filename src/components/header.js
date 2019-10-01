import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  handlePurchase = (token) => {
    const amount = 5000
    const description = "MacBook"

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }

    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src='/images/logo-1.png' width="80" /></Link>
          <Link to="/services">Services</Link>
          <Link to="/conveniently-cut">Custom Vinyl</Link>
          <Link to="/contact">Contact</Link>
          <StripeCheckout
            amount={ 5000 }
            image="https://cl.ly/0K2f1V3K3h0D/download/Logo.jpg"
            token={this.handlePurchase}
            stripeKey={'pk_test_4VuxMZhOiYXJlElaTf3qjAXh'}
            >
            <button>Shop</button>
          </StripeCheckout>
        </div>
      </div>
    )
  }
}

export default Header
