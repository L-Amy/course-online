import axios from 'axios'
import {
    getUserInfo,
    setUserInfo, removeUserInfo
} from './auth'

const service = axios.create({
    timeout: 6000
});

//service.interceptors.request.use(config => {
//    //if
//})

export default service;