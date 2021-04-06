import React from 'react'
import Landing from './pages/Landing'
import TopicMenu from './pages/TopicMenu'
import UserProfile from './pages/UserProfile'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Lesson from './components/Lesson'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import lessons from './lessons.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lessons: lessons
    }
  }
  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    const { lessons } = this.state
    console.log("current user:", current_user)
    return (
      <Router>
        <Header sign_in_route={ sign_in_route } sign_out_route={ sign_out_route } logged_in={ logged_in } />
        <Switch>
          { !logged_in &&
            <Landing sign_in_route={ sign_in_route } new_user_route={ new_user_route } />
          }
          { logged_in &&
            <>
              <SideBar lessons={ lessons } />
                <Route exact path="/" render={ (props) => <TopicMenu lessons={ lessons } /> } />
                <Route path="/profile" render={ (props) => <UserProfile current_user={ current_user } /> } />
                <Route
                  path="/lesson/:id"
                  render={ (props) => {
                    let currentLesson = lessons.find(l => l.id === +props.match.params.id)
                    return <Lesson lesson={ currentLesson } />
                  }}
                />
            </>
          }
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App
