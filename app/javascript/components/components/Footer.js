import React, { Component } from 'react'

class Footer extends Component {
  render() {
    const { lesson } = this.props
    return (
      <>
        <div className="footer-main">
          <a href={ `/lesson/${lesson.id - 1}` }>Previous</a>
          <a href={ `/lesson/${lesson.id + 1}` }>Next</a>
        </div>
      </>
    )
  }
}
export default Footer
