import React, { Component } from 'react'

import api from '../services/api'

export default class User extends Component {
  state = {
    user: undefined,
    loading: true,
  }
  componentDidMount = async () => {
    try {
      const user = await api.user.fetch()
      this.setState({ user, loading: false })
    } catch (error) {
      this.setState({ loading: false })
    }
  }
  render() {
    const { user, loading } = this.state
    return loading 
    ? <div></div>
    : <div className="logged-user"> 
        {user 
          ? <div className="username">
              <div>{user.universityId}</div>
              <a className="button" href="/logout">Logout</a>
            </div>
          : <div>
              <a className="button" href="/login">Login</a>
            </div>
        }
      </div>
  }
}