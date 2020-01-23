
import React, { Component } from 'react'
import User from './User';

export default class Header extends Component {
  render () {
    return <div className="header level">
      <div className="level-left">
      <a className="logo">
        <img src="https://fenix.tecnico.ulisboa.pt/api/bennu-portal/configuration/logo"/>
      </a></div>
      <div className="level-right"><User /></div>
      <hr />
    </div>
  }
}