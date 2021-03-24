import React, { Component } from 'react'

class Lesson extends Component {
  render() {
    return (
      <>
        <div className="lesson-main">
          <h3>{ this.props.lesson.name }</h3>
          <p>{ this.props.lesson.content }</p>
        </div>
      </>
    )
  }
}
export default Lesson
