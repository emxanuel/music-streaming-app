import axios from "axios"
const server = 'http://localhost'
const axiosInstance = axios.create({
    baseURL: `${server}/api`
})

export {axiosInstance}