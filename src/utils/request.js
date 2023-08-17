import axios from 'axios'

export const BASE_URL = 'http://codercba.com:1888/airbnb/api'

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

request.interceptors.response.use((res) => res.data)

export default request
