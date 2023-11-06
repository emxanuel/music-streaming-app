import axios from "axios"
const server = process.env.NEXT_PUBLIC_SERVER
const axiosInstance = axios.create({
    baseURL: `${server}/api`
})

export {axiosInstance}  