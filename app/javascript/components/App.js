import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/SideBar'
import CorrectAnswer from './pages/CorrectAnswer'
import CSSMenu from './pages/CSSMenu'
import DevMenu from './pages/DevMenu'
import HTMLMenu from './pages/HTMLMenu'
import JSMenu from './pages/JSMenu'
import Landing from './pages/Landing'
import TopicMenu from './pages/TopicMenu'
import Lesson from './pages/Lesson'
import UserProfile from './pages/UserProfile'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import lessons from './lessons.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lessons: lessons
    }
  }

  submittedAnswer = (answer) => {
    console.log(answer)
  }

  render () {
    const {
      logged_in,
      current_user,
      sign_up_route,
      sign_in_route,
      sign_out_route
    } = this.props
    const { lessons } = this.state
    console.log("current user:", current_user)
    return (
      <Router>
        <Header
          sign_up_route={ sign_up_route }
          sign_in_route={ sign_in_route }
          sign_out_route={ sign_out_route }
          logged_in={ logged_in }
        />
        <Switch>
          { !logged_in &&
            <Landing sign_in_route={ sign_in_route } sign_up_route={ sign_up_route } />
          }
          { logged_in &&
            <>
              <SideBar lessons={ lessons } />
              <Route exact path="/" render={ (props) => {
                return <TopicMenu lessons={ lessons } />
              }} />
              <Route path="/lesson/:id" render={ (props) => {
                let currentLesson = lessons.find(l => l.id === +props.match.params.id)
                return <Lesson lesson={ currentLesson } submittedAnswer={ this.submittedAnswer } />
              }} />
              <Route path="/html" render={ (props) => {
                let htmlLessons = lessons.filter(value => value.topic === "html")
                return <HTMLMenu htmlLessons={ htmlLessons } />
              }} />
              <Route path="/css" render={ (props) => {
                let cssLessons = lessons.filter(value => value.topic === "css")
                return <CSSMenu cssLessons={ cssLessons } />
              }} />
              <Route path="/javascript" render={ (props) => {
                let jsLessons = lessons.filter(value => value.topic === "javascript")
                return <JSMenu jsLessons={ jsLessons } />
              }} />
              <Route path="/dev" render={ (props) => {
                let devLessons = lessons.filter(value => value.topic === "dev")
                return <DevMenu devLessons={ devLessons } />
              }} />
              <Route path="/correct/:id" render={ (props) => {
                let currentLesson = lessons.find(l => l.id === +props.match.params.id)
                return <CorrectAnswer lesson={ currentLesson } />
              }} />
              <Route path="/profile" render={ (props) => {
                return <UserProfile current_user={ current_user } />
              }} />
            </>
          }
        </Switch>
      </Router>
    );
  }
}

export default App
