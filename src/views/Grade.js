
import React, { Component } from 'react'

import api from '../services/api'
import Panel from '../components/Panel'

const TRANSLATION = {
  'course.name': 'Name',
  'course.acronym': 'Acronym',
  'course.academicTerm': 'Academic Term',
  'course.url': 'Course Url',
  grade: 'Grade',
  ects: 'ECTS',
}

export default class Grades extends Component {

  state = {
    grade: undefined,
  }

  componentDidMount = async () => {
    const gradeId  = this.props.match.params.id
    const grade = await api.grade.fetch('me',gradeId)
    this.setState( {'grade':grade} )
  }

  render () {
    const grade  = this.state.grade
    
    return <nav className="panel">
      <p className="panel-heading">
        Course Grade
      </p>
      <div className="panel-block">
      <Panel data={grade} translation={TRANSLATION} />
      </div>
    </nav>
  }
}