import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Lesson extends Component {
  render() {
    const { lesson } = this.props
    return (
      <>
        <div className="lesson-main">
          <h3>Topic: { lesson.topic.toUpperCase() }</h3>
          <h3>{ lesson.name }</h3>
          { !lesson.completed &&
            <>
              <p>{ lesson.summary }</p>
              <p>{ lesson.content }</p>
              <NavLink to={ `/correct/${lesson.id}` }>
                <button onClick={ () => alert("submitting lesson") }>
                  Submit
                </button>
              </NavLink>
            </>
          }
          { lesson.completed &&
            <>
              <p>You have already completed this lesson.</p>
              <button>Revisit this lesson here.</button>
            </>
          }
        </div>
      </>
    )
  }
}
export default Lesson
