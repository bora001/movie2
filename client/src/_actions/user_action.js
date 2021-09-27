import axios from "axios";
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types'

export function loginUser(dataToSubmit) {
    const request = axios.post('/api/login', dataToSubmit).then(response => response.data)
    console.log("loginUser",request)
    return {
        type: LOGIN_USER,
        payload : request
    }
};

export function registerUser(dataToSubmit) {
    console.log("registerUser",request)

    const request = axios.post('/api/register', dataToSubmit).then(response => response.data)
    
    return {
        type: REGISTER_USER,
        payload : request
    }
};

export function authUser() {
    console.log("AuthUser",request)

    const request = axios.get('/api/auth')
        .then(response => response.data)
    
    return {
        type: AUTH_USER,
        payload : request
    }
};