import axios from "axios"

const instance = axios.create({
    baseURL: "https://localhost:49163/api"
})

export default instance