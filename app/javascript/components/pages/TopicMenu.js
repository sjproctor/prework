import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class TopicMenu extends Component {
  render() {
    const { lessons } = this.props
    const html = lessons.filter(lesson => lesson.topic === "html")
    const css = lessons.filter(lesson => lesson.topic === "css")
    const javascript = lessons.filter(lesson => lesson.topic === "javascript")
    const dev = lessons.filter(lesson => lesson.topic === "dev")
    return (
      <div className="topics-menu-body">
        <div className="topics-description">
          <h3>Menu of Topics</h3>
          <div>
            This is all about the three topics and the selections you can make below. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <br />
        <div className="topics-menu-full">
          <section className="topic">
            <h2>HTML</h2>
            <ul>
              { html.map(lesson => {
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
          </section>
          <section className="topic">
            <h2>CSS</h2>
            <ul>
              { css.map(lesson => {
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
          </section>
          <section className="topic">
            <h2>JavaScript</h2>
            <ul>
              { javascript.map(lesson => {
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
          </section>
          <section className="topic">
            <h2>Dev Tools</h2>
            <ul>
              { dev.map(lesson => {
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
          </section>
        </div>

        {/* ---BREAKPOINTS--- */}
        <div className="topics-menu-mobile">
          <NavLink to="/html" className="topic-mobile">HTML</NavLink>
          <NavLink to="/html" className="topic-mobile">CSS</NavLink>
          <NavLink to="/html" className="topic-mobile">JavaScript</NavLink>
          <NavLink to="/html" className="topic-mobile">Dev Tools</NavLink>
        </div>
      </div>
    )
  }
}
export default TopicMenu
