import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section className='hero'>
       <img src= "/restaurant.jpg" alt = "restaurant"/>
       <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>We believe that it is all about the BIG DREAMS and SMALL DETAILS.</p>
         <Link to= "contact" spy= {true} smooth={true} duration={500}>BOOKINGS OPEN</Link>
        </div>
       </div>
    </section>
  )
}

export default HeroSection
