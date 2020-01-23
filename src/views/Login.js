import React, { Component } from 'react'

export default class Login extends Component {
  componentDidMount () {
    window.location.href = 'http://localhost:8080/auth/fenix'
  }
  render() {
    return <div>
      Redirecting
    </div>
  }
}