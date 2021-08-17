import React, { Component } from 'react'

class HTMLMenu extends Component {
  render() {
    const { htmlLessons } = this.props
    return (
      <>
        <main>
          <h2>HTML</h2>
          <ul>
            { htmlLessons.map(lesson => {
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
export default HTMLMenu
