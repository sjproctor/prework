import React, { Component } from 'react'

class Landing extends Component {
  render() {
    const { sign_in_route, sign_up_route } = this.props
    return (
      <div className="landing-body">
        <div className="landing-title">
          <h2>Hi! 👋</h2>
          <h2>We are so glad you are here.</h2>
        </div>
        <div className="landing-nav">
          <a href={ sign_up_route } className="landing-action">Sign Up For a New Account</a>
          <a href={ sign_in_route } className="landing-action">Sign In to an Existing Account</a>
          <a href="https://www.learnacademy.org/contact-us/" target="_blank" className="landing-action"> Questions? Contact LEARN Academy</a>
        </div>
        <br />
        <p className="landing-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}
export default Landing
