import React, { Component } from 'react'

class UserProfile extends Component {
  render() {
    const { current_user } = this.props
    return (
      <>
        <div>Hello, { current_user.email }!</div>
        <div>Current lesson: ~placeholder text~</div>
      </>
    )
  }
}
export default UserProfile
