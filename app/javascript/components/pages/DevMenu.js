import React, { Component } from 'react'

class DevMenu extends Component {
  render() {
    const { devLessons } = this.props
    return (
      <>
        <main>
          <h2>Dev Tools</h2>
          <ul>
            { devLessons.map(lesson => {
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
export default DevMenu
