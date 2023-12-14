import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/users'

export const login = async (email, password) => {
    const result = request.post(`${baseUrl}/login`, {
        email,
        password,
    });
    return result;
}
export const register = (data) => request.post(`${baseUrl}/register`, data);

export  function logout (token){
   fetch(`${baseUrl}/logout`, {
    headers:{
        'X-Authorization':token
    }
   });
}