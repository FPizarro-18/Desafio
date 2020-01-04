import { API_HOST } from './config';
import axios from 'axios';


export const findAll = () => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
}

export const findById = (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post/${id}`, {
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

export const save = (post) => {
    const token = localStorage.getItem('token');

    return fetch(`${API_HOST}/api/post`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(post),
        headers: {
             'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};



export const update = (jwt='', data, id) => {

    return new Promise((resolve, reject) => {
        axios.patch(`${API_HOST}/api/post/${id}`, data, {
            headers: {
                authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}