import axiosInstance from '../config/axiosInstance'

const login = async (payload) => {
  axiosInstance('/login', {
    method: 'POST',
    data: payload
  })
    .then((resp) => resp)
    .catch((err) => {
      console.log(err)
    })
}

export default login
