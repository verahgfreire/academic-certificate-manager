
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import api from '../services/api'

export default class GradesList extends Component {

  state = {
    grades: undefined,
  }

  componentDidMount = async () => {
    const grades = await api.grade.list()
    //console.log('grades', grades[Object.keys(grades)[0]])
    this.setState({ grades: grades[Object.keys(grades)[0]] })
  }

  render () {
    const grades = this.state.grades
    return <nav className="panel">
              <p className="panel-heading">
                Grades
              </p>
              <div className="panel-block">
              <table className="table is-hoverable is-fullwidth">  
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Course Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {grades && grades.length > 0 ? grades.map((grade, index) => <tr key={index}><td><Link to={"/grades/"+grade.id+"/"}>{grade.course && grade.course.name}</Link></td><td>{grade.grade}</td></tr>)
                  : <tr><td>Loading...</td><td>Loading...</td></tr>}
                </tbody>
              </table>
              </div>
            </nav>
  }
}