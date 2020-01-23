
export default class Certificate {
  constructor(api) {
    this.api = api
  }

  fetch(userId = 'me', certId) {
    return this.api.get(`/users/${userId}/certificates/${certId}`)
  }

  list(userId = 'me') {
    return this.api.get(`/users/${userId}/certificates`)
  }
}