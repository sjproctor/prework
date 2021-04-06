import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    const { lessons } = this.props
    const html = lessons.filter(lesson => lesson.topic === "html")
    const css = lessons.filter(lesson => lesson.topic === "css")
    const javascript = lessons.filter(lesson => lesson.topic === "javascript")
    return (
      <>
        <div className="sidebar-main">
          <h3>HTML</h3>
            <ul>
              { html.map(lesson => {
                  return (
                    <li key={ lesson.id }>
                      <a href={ `/lesson/${lesson.id}` }>
                        { lesson.name }
                      </a>
                    </li>
                  )
                })}
            </ul>
          <h3>CSS</h3>
            <ul>
              { css.map(lesson => {
                  return (
                    <li key={ lesson.id }>
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
              { javascript.map(lesson => {
                  return (
                    <li key={ lesson.id }>
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
