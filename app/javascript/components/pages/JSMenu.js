import React, { Component } from 'react'

class JSMenu extends Component {
  render() {
    const { jsLessons } = this.props
    return (
      <>
        <main>
          <h2>JavaScript</h2>
          <ul>
            { jsLessons.map(lesson => {
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
        </main>
      </>
    )
  }
}
export default JSMenu
