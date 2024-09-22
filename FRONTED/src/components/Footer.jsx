import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
         <h1>EVENT SOLUTION</h1>
         <p>EVENTS AND WEDDING</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div><input type = "text" placeholder="E-mail"/>
              <button>FOLLOW US</button>
          </div>
          <p>Sign up with your e-mail to get the latest updates!!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
