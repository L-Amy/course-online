import axios from 'axios'
import {
    getUserInfo,
    setUserInfo, removeUserInfo
} from './auth'

const service = axios.create({
    timeout: 5000
});

//service.interceptors.request.use(config => {
//    //if
//})

export default service;