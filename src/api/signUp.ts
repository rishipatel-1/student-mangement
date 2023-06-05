import axiosInstance from '../config/axiosInstance'

const signUp = async (payload: { email: string; username: string; password: string; role: string; Enable_2FactAuth: boolean }) => {
  axiosInstance('/signup', {
    method: 'POST',
    data: payload
  }).then((resp) => resp)
}

export default signUp
