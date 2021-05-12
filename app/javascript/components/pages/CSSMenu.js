import React, { Component } from 'react'

class CSSMenu extends Component {
  render() {
    const { cssLessons } = this.props
    return (
      <>
        <div className="individual-menu">
          <h2>CSS</h2>
          <ul>
            { cssLessons.map(lesson => {
                return (
                  <li key={ lesson.id }>
                    <a href={ `/lesson/${lesson.id}` }>
                      { lesson.name }
                    </a>
                    <div>{ lesson.summary }</div>
                  </li>
                )
              })}
          </ul>
        </div>
      </>
    )
  }
}
export default CSSMenu
