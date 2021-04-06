import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    const {
      sign_in_route,
      sign_out_route,
      logged_in
    } = this.props
    return (
      <div className="header-main">
        <h1>LEARN Prework</h1>
        <ul className="navbar">
          <li>Topic
            <ul>
              <li><NavLink to="/">Topic Menu</NavLink></li>
              <li><NavLink to="html">HTML</NavLink></li>
              <li><NavLink to="css">CSS</NavLink></li>
              <li><NavLink to="javascript">JavaScript</NavLink></li>
            </ul>
          </li>
          <li>User
            <ul>
              { logged_in &&
                <>
                  <li><NavLink to="profile">Profile</NavLink></li>
                  <li><NavLink to="something">Something</NavLink></li>
                  <li><a href={ sign_out_route }>Sign Out</a></li>
                </>
            }
            { !logged_in &&
              <li><a href={ sign_in_route }>Sign In</a></li>
            }
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
export default Header
