import React, { Component } from 'react'

class UserProfile extends Component {
  render() {
    const { current_user } = this.props
    return (
      <main>
        <h2>Welcome to the { current_user.cohort }, { current_user.firstname }!</h2>
      </main>
    )
  }
}
export default UserProfile
