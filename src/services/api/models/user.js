
export default class User {
  constructor(api) {
    this.api = api
  }

  fetch(userId = 'me') {
    return this.api.get(`/users/${userId}`)
    /*return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: 'Vera Freire' })
      }, 1000)
    })*/
  }
}