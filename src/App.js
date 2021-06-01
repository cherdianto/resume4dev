import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './components/homepage/homepage'
import Builder from './components/builder/builder'
import SignIn from './components/auth/signIn'
import SignUp from './components/auth/signUp'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/builder" component={Builder} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/signIn" component={SignIn} />
          </Switch>
          <Footer />
        </div>
        
      </BrowserRouter>
    )
  }
}

