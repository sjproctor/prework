import React, { Component } from 'react'

class Landing extends Component {
  render() {
    const { sign_in_route, sign_up_route } = this.props
    return (
      <div className="landing-main">
        <h2>Welcome to the LEARN Prework app.</h2>
        <div>
        <a href={ sign_up_route }>Create an Account</a> |
        Already have an account? <a href={ sign_in_route }>Sign in here</a> |
        <a href="https://www.learnacademy.org/contact-us/" target="_blank">Questions? Contact LEARN Academy</a>
        </div>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}
export default Landing
