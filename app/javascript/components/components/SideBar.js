import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    return (
      <>
        <div className="sidebar-main">
          <h3>HTML</h3>
            <ul>
              { this.props.lessons.map((lesson, index) => {
                  return (
                    <li key={ index }>
                      <a href={ `/lesson/${lesson.id}` }>
                        { lesson.name }
                      </a>
                    </li>
                  )
                })}
            </ul>
          <h3>CSS</h3>
            <ul>
              {
                this.props.lessons.map((lesson, index) => {
                  return (
                    <li key={ index }>
                      <a href={ `/lesson/${lesson.id}` }>
                        { lesson.name }
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          <h3>JavaScript</h3>
            <ul>
              {
                this.props.lessons.map((lesson, index) => {
                  return (
                    <li key={ index }>
                      <a href={ `/lesson/${lesson.id}` }>
                        { lesson.name }
                      </a>
                    </li>
                  )
                })
              }
            </ul>
        </div>
      </>
    )
  }
}
export default SideBar
