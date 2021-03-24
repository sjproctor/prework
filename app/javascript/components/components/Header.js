import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <>
        <div className="header-main">
          <h1>LEARN Prework</h1>
          <ul className="navbar">
            <li>Topic
              <ul>
                <li><a href="html">HTML</a></li>
                <li><a href="css">CSS</a></li>
                <li><a href="javascript">JavaScript</a></li>
              </ul>
            </li>
            <li>User
              <ul>
                <li><a href="profile">Profile</a></li>
                <li><a href="something">Something</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    )
  }
}
export default Header
