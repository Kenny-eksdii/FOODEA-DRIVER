import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import { NativeModules } from 'react-native'
import config from './config'

const api = ({ token = null} = {}) => {
    const api = axios.create({
        baseURL: config.api,
    })

    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status == 401) {
                SecureStore.deleteItemAsync('user')
                NativeModules.DevSettings.reload()
                return Promise.reject({ status: 401, errors: ['Unauthorized'] })
            }
            return Promise.reject(error.response.data)
        }
    )

    return api
}

export default api