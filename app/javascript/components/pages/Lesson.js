import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Lesson extends Component {
  constructor(props){
    super(props)
    this.state = {
      answer: ""
    }
  }

  handleChange = (e) => {
    this.setState({ answer: e.target.value })
  }

  handleSubmit = () => {
    alert("submitting lesson")
    this.props.submittedAnswer(this.state.answer)
  }

  render() {
    const { lesson } = this.props
    const { answer } = this.state
    return (
      <>
        <main>
          <h3>Topic: { lesson.topic.toUpperCase() }</h3>
          <h3>{ lesson.name }</h3>
          { !lesson.completed &&
            <>
              <p>{ lesson.summary }</p>
              <p>{ lesson.content }</p>
              <p>{ lesson.question }</p>
              <form>
                <input
                  type="radio"
                  name={ answer }
                  value={ lesson.answer1 }
                  onChange={ this.handleChange }
                />
                <label htmlFor={ lesson.answer1 }>{ lesson.answer1 }</label>
                <br />
                <input
                  type="radio"
                  name={ answer }
                  value={ lesson.answer2 }
                  onChange={ this.handleChange }
                />
                <label htmlFor={ lesson.answer2 }>{ lesson.answer2 }</label>
                <br />
                <input
                  type="radio"
                  name={ answer }
                  value={ lesson.answer3 }
                  onChange={ this.handleChange }
                />
                <label htmlFor={ lesson.answer3 }>{ lesson.answer3 }</label>
                <br />
                <input
                  type="radio"
                  name={ answer }
                  value={ lesson.answer4 }
                  onChange={ this.handleChange }
                />
                <label htmlFor={ lesson.answer4 }>{ lesson.answer4 }</label>
              </form>
              <NavLink to={ `/correct/${lesson.id}` }>
                <button onClick={ this.handleSubmit } className="block-button">
                  Submit
                </button>
              </NavLink>
            </>
          }
          { lesson.completed &&
            <>
              <p>You have already completed this lesson.</p>
              <NavLink to={ `/lesson/${lesson.id + 1}` }>
                <button className="block-button">Go to next lesson</button>
              </NavLink>
            </>
          }
        </main>
      </>
    )
  }
}
export default Lesson
