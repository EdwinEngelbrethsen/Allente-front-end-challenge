import axios from 'axios'


const instance = axios.create({
    baseURL: "https://stoplight.io/mocks/sci-code/diggit:master/12726515/"
})

export default instance