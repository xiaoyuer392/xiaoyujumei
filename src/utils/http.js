import axios from 'axios'

axios.defaults.withCredentials= true
const get = ({url}) => {
  return axios.get(
    url
  )
  .then(result => {
    return result.data
  })
}

export {
  get
}