import { API_HOST } from './config';

export const login = async (user) => {
    const res = await fetch(`${API_HOST}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}