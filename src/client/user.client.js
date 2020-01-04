import { API_HOST } from './config';
import axios from 'axios';

export const findAll = () => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/user`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
}

export const findById = (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/user/${id}`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};

/*
email,
password
name
*/
export const save = (user) => {
    const token = localStorage.getItem('token');
    debugger;
    return fetch(`${API_HOST}/api/user`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};



export const update = (jwt='', data, id) => {
    
    debugger;
    return new Promise((resolve, reject) => {
        axios.patch(`${API_HOST}/api/user/${id}`, data, {
            headers: {
                authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}

// export const update = (data, id) => {
//     const token = localStorage.getItem('token');
//          return fetch(`${API_HOST}/api/user/${id}`, data, {
//             method: 'PUT', // or 'PUT'
//             body: JSON.stringify(data),
//             headers: {
//                 authorization: `bearer ${token}`,
//             }
//         }).then(res => res.json())
 
// }