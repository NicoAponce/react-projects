import Axios from 'axios'

const ApiAxios = Axios.create({
    baseURL:'http://localhost:9898/api'
})

export default ApiAxios