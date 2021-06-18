import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import learnLogo from '../assets/LEARN-logo-green.png'
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Header extends Component {
  render() {
    const {
      sign_up_route,
      sign_in_route,
      sign_out_route,
      logged_in
    } = this.props
    return (
      <div className="header-main">
        <NavLink to="/">
          <img src={ learnLogo } alt="LEARN Academy logo" className="header-logo" />
        </NavLink>
        <h1>Cohort Prework</h1>
        <ul className="navbar">
          { logged_in &&
            <li>TOPIC
              <ul className="header-drop-menu">
                <li><NavLink to="/" className="header-link">Topic Menu</NavLink></li>
                <li><NavLink to="/html" className="header-link">HTML</NavLink></li>
                <li><NavLink to="/css" className="header-link">CSS</NavLink></li>
                <li><NavLink to="/javascript" className="header-link">JavaScript</NavLink></li>
                <li><NavLink to="/dev" className="header-link">Dev Tools</NavLink></li>
              </ul>
            </li>
          }
          { logged_in &&
            <li>USER
              <ul className="header-drop-menu">
                <>
                  <li><NavLink to="/profile" className="header-link">Profile</NavLink></li>
                  <li><NavLink to="/something" className="header-link">Something</NavLink></li>
                  <li><a href={ sign_out_route } className="header-link">Sign Out</a></li>
                  <li><a href="https://www.learnacademy.org/contact-us/" className="header-link">Contact LEARN</a></li>
                </>
              </ul>
            </li>
          }
          { !logged_in &&
            <div className="devise-header-button">
              <a href={ sign_in_route }>SIGN IN</a>
            </div>
          }
        </ul>
      </div>
    )
  }
}
export default Header
