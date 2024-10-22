import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Blog from './Blog'

export default class Home1 extends Component {
  render() {
    return (
      <div>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Blog/>
      </div>
    )
  }
}
