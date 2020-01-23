
import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'

export default class Menu extends Component {
  render () {
    return <div className="side-panel"><aside className="menu">
    <p className="menu-label">
      General
    </p>
    <ul className="menu-list">
      <li><Link to="/">Feed</Link></li>
      <li><Link activeClassName="is-active" to="/profile">Profile</Link></li>
    </ul>
    <p className="menu-label">
      Academic
    </p>
    <ul className="menu-list">
      <li><Link activeClassName="is-active" to="/grades">Grades</Link></li>
      <li><Link activeClassName="is-active" to="/certificates">Certificates</Link></li>
      <li><Link activeClassName="is-active" to="/documents">Documents</Link></li>
    </ul>
  </aside>
  </div>
  }
}