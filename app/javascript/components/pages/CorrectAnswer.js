import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CorrectAnswer extends Component {
  render() {
    let { lesson } = this.props
    return (
      <main>
        <h2>Congratulations!</h2>
        <p>{ lesson.answer_details }</p>
        <NavLink to={ `/lesson/${lesson.id + 1}` }>
          <button className="block-button">Go to next lesson</button>
        </NavLink>
      </main>
    )
  }
}
export default CorrectAnswer
