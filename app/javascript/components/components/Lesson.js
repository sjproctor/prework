import React, { Component } from 'react'

class Lesson extends Component {
  render() {
    const { lesson } = this.props
    return (
      <>
        <div className="lesson-main">
          <h3>Topic: { lesson.topic.toUpperCase() }</h3>
          <h3>{ lesson.name }</h3>
          <p>{ lesson.summary }</p>
          <p>{ lesson.content }</p>
        </div>
      </>
    )
  }
}
export default Lesson
