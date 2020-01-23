
import React, { Component } from 'react'
import api from '../services/api'

import Panel from '../components/Panel'

const TRANSLATION = {
  'firstname': 'Firstname',
  'lastname': 'Lastname',
  'universityId': 'Student ID',
}

export default class Profile extends Component {

  state = {
    user: undefined,
  }

  componentDidMount = async () => {
    const user = await api.user.fetch('me')
    this.setState({user})
  }

  render () {
    
    return <nav className="panel">
      <p className="panel-heading">
        Profile
      </p>
      <div className="panel-block profile-photo">
        {this.state.user &&
          <img alt="profile" src={`https://fenix.tecnico.ulisboa.pt/user/photo/${this.state.user.universityId}`} />
        }
      </div>
      <div className="panel-block">
        <Panel translation={TRANSLATION} data={this.state.user} />
      </div>
    </nav>
  }
}