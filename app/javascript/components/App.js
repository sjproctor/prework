import React from "react"
import SideBar from "./components/SideBar"
import Header from "./components/Header"
import Lesson from "./components/Lesson"
import Footer from "./components/Footer"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import lessons from "./lessons.js"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lessons: lessons
    }
  }
  render () {
    return (
      <Router>
        <Header />
        <SideBar lessons={ this.state.lessons } />
        <Route
          path={ "/lesson/:id" }
          render={ (props) => {
            let currentLesson = this.state.lessons.find(l => l.id === parseInt(props.match.params.id))
            return <Lesson lesson={ currentLesson } />
          }}
        />
        <Route
          path={ "/lesson/:id" }
          render={ (props) => {
            let currentLesson = this.state.lessons.find(l => l.id === parseInt(props.match.params.id))
            return <Footer lesson={ currentLesson } />
          }}
        />
      </Router>
    );
  }
}

export default App
