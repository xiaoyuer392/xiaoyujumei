import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import  Index  from './pages/Index'
import { Detail } from './pages/detail/'

export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/index" component={Index}></Route>
          <Route path="/details/:id/:proid" component={Detail}></Route>
          <Redirect from="/" exact to="/index"></Redirect>
        </Switch>
      </>
    )
  }
}