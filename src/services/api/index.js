
import axios from 'axios'

import User from './models/user'
import Grade from './models/grade'
import Certificate from './models/certificate';



class API {
  constructor () {
    this.axios = axios.create({
      baseURL: 'http://localhost:8080/api',
    })
    this.user = new User(this)
    this.grade = new Grade(this)
    this.certificate = new Certificate(this)
  }
  _normalize(response) {
    return response.data
  }
  get (url, config) {
    return this.axios.get(url, config).then(this._normalize)
  }
  post(url, data, config) {
    return this.axios.post(url, data, config).then(this._normalize)
  }
}

const api = new API()
export default api