import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

const userId = JSON.parse(localStorage.getItem('profile')).data.data;

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

const url = "http://localhost:5000/api/auth/signin";
			// const { data: res } = await axios.post(url, data);

export const signIn = (userData) => { 
    return API.post('/auth/signin', userData);
    // return axios.post(signInURL, userData);
}

export const signUp = (userData) => {
    return API.post('/auth/signup', userData);
}

export const getProfile = () => {
    return API.get(`/auth/profile/${userId}`);
}

export const updateProfile = (userData) => {
    return API.post(`/auth/updateprofile/${userId}`, userData);
}