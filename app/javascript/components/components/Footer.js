import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div className="footer-main">
        <NavLink to="/">Topic Menu</NavLink>
      </div>
    )
  }
}
export default Footer
