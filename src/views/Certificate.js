
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from '../services/api'
import Panel from '../components/Panel'
import List from '../components/List'

const TRANSLATION = {
  'degree.id' : 'Degree ID',
  'degree.name' : 'Degree Name',
  'degree.acronym' : 'Degree Acronym',
  'start' : 'Start Date',
  'end' : 'End Date',
  'credits' : 'Degree Credits',
  'average': 'Average',
  'calculatedAverage' : 'Calculated Average',
  'numberOfApprovedCourses' : 'Number of Approved Courses'
}

const GRADE_TRANSLATION = {
  'course.name': 'Name',
  'course.acronym': 'Acronym',
  'course.academicTerm': 'Academic Term',
  'course.url': 'Course Url',
  grade: 'Grade',
  ects: 'ECTS',
}

export default class Certificate extends Component {

  state = {
    grade: undefined,
  }

  componentDidMount = async () => {
    const certId  = this.props.match.params.id
    const cert = await api.certificate.fetch('me',certId)
    this.setState({ cert: cert, courses: cert.approvedCourses })
    
  }

  render () {
    const { cert, courses }  = this.state
    
    return <nav className="panel">
      <p className="panel-heading">
        Certificate
      </p>
      <div className="panel-block">
      <Panel data={cert} translation={TRANSLATION} />
      </div>
      <p className="panel-heading" style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
        Approved Courses
      </p>
      <div className='panel-block'>
        {courses &&
          <List data={courses} translation={GRADE_TRANSLATION} /> 
        }
      </div>
    </nav>
  }
}