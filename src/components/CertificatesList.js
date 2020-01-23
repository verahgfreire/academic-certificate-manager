
import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import api from '../services/api'

export default class CertificatesList extends Component {

  state = {
    certificates: undefined,
  }

  componentDidMount = async () => {
    const certificates = await api.certificate.list()
    console.log('certificates', certificates[Object.keys(certificates)[0]])
    this.setState({ certificates: certificates[Object.keys(certificates)[0]] })
  }

  render () {
    const certificates  = this.state.certificates
    return <nav className="panel">
              <p className="panel-heading">
                Certificates
              </p>
              <div className="panel-block">
              <table className="table is-hoverable is-fullwidth">  
                <thead>
                  <tr>
                    <th>Degree Name</th>
                    <th>Acronym</th>
                    <th>Average</th>
                  </tr>
                </thead>
                <tbody>
                  {certificates && certificates.length > 0 ? certificates.map((certificate, index) => <tr><td><Link to={"/certificates/"+certificate.id+"/"}>{certificate.degree.name}</Link></td><td>{certificate.degree.acronym}</td><td>{certificate.average}</td></tr>)
                  : <tr><td>Loading...</td><td>Loading...</td></tr>}
                </tbody>
              </table>
              </div>
            </nav>
  }
}