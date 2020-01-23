
export default class Grade {
  constructor(api) {
    this.api = api
  }

  fetch(userId = 'me', gradeId) {
    return this.api.get(`/users/${userId}/grades/${gradeId}`)
  }

  list(userId = 'me') {
    return this.api.get(`/users/${userId}/grades`)
  }
}