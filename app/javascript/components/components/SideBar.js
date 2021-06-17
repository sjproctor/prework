import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SideBar extends Component {
  render() {
    const { lessons } = this.props
    const html = lessons.filter(lesson => lesson.topic === "html")
    const css = lessons.filter(lesson => lesson.topic === "css")
    const javascript = lessons.filter(lesson => lesson.topic === "javascript")
    const dev = lessons.filter(lesson => lesson.topic === "dev")
    return (
      <>
        <div className="sidebar-main">
          <h3>HTML</h3>
            <ul>
              { html.map(lesson => {
                return (
                  <li key={ lesson.id }>
                    <NavLink to={ `/lesson/${lesson.id}` } className="links">
                      { lesson.name }
                    </NavLink>
                    <span>{ lesson.completed && "✅" }</span>
                  </li>
                )
              })}
            </ul>
          <h3>CSS</h3>
            <ul>
              { css.map(lesson => {
                return (
                  <li key={ lesson.id }>
                    <NavLink to={ `/lesson/${lesson.id}` } className="links">
                      { lesson.name }
                    </NavLink>
                    <span>{ lesson.completed && "✅" }</span>
                  </li>
                )
              })}
            </ul>
          <h3>JavaScript</h3>
            <ul>
              { javascript.map(lesson => {
                return (
                  <li key={ lesson.id }>
                    <NavLink to={ `/lesson/${lesson.id}` } className="links">
                      { lesson.name }
                    </NavLink>
                    <span>{ lesson.completed && "✅" }</span>
                  </li>
                )
              })}
            </ul>
          <h3>Dev Tools</h3>
            <ul>
              { dev.map(lesson => {
                return (
                  <li key={ lesson.id }>
                    <NavLink to={ `/lesson/${lesson.id}` } className="links">
                      { lesson.name }
                    </NavLink>
                    <span>{ lesson.completed && "✅" }</span>
                  </li>
                )
              })}
            </ul>
        </div>
      </>
    )
  }
}
export default SideBar
