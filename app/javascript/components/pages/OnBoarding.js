import React, { Component } from 'react'

class UserProfile extends Component {
  render() {
    const { current_user } = this.props
    return (
      <main>
        <h2>Welcome to the { current_user.cohort }, { current_user.firstname }!</h2>
        <p>Here is a list of action items to prepare for your cohort.</p>
          <div>
            <input type="checkbox" name="transcripts" value="transcripts" />
            <label htmlFor="transcripts">Send Transcripts</label><br />
            <input type="checkbox" name="one-on-one" value="one-on-one" />
            <label htmlFor="one-on-one">Schedule One-on-one with Instructor</label><br />
            <input type="checkbox" name="docusign" value="docusign" />
            <label htmlFor="docusign">Return DocuSign</label><br />
            <input type="checkbox" name="financing" value="financing" />
            <label htmlFor="financing">Financing</label><br />
            <input type="checkbox" name="workshop" value="workshop" />
            <label htmlFor="workshop">Attend a LEARN Workshop</label><br />
            <input type="checkbox" name="slack" value="slack" />
            <label htmlFor="slack">Join the LEARN Slack Org</label><br />
            <input type="checkbox" name="laptop" value="laptop" />
            <label htmlFor="laptop">Pickup Laptop</label><br />
            <input type="checkbox" name="first-day" value="first-day" />
            <label htmlFor="first-day">First Day</label><br />
          </div>
      </main>
    )
  }
}
export default UserProfile
