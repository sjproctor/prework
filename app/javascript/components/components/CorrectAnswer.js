import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CorrectAnswer extends Component {
  render() {
    let { lesson } = this.props
    return (
      <>
        <h2>Congratulations!</h2>
        <p>{ lesson.answer_details }</p>
        <NavLink to={ `/lesson/${lesson.id + 1}` }>
          <button>Go to next lesson</button>
        </NavLink>
      </>
    )
  }
}
export default CorrectAnswer
