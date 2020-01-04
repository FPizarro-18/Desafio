import { findAll, findById, save, update } from '../../../client/post.client';

import {
    POST_SAVE_NOK,
    POST_SAVE_OK,
    POST_SAVE_START,
    POST_FIND_ALL_NOK,
    POST_FIND_ALL_OK,
    POST_FIND_ALL_START,
    POST_FIND_BY_ID_START,
    POST_FIND_BY_ID_OK,
    POST_FIND_BY_ID_NOK,
    POST_UPDATE_START,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_ERROR,
} from './const';

const findAllStartActionCreator = () => ({
    type: POST_FIND_ALL_START,
    payload: null,
});

const findAllOkActionCreator = (data) => ({
    type: POST_FIND_ALL_OK,
    payload: data,
});

const findAllNokActionCreator = (errorMessage) => ({
    type: POST_FIND_ALL_NOK,
    payload: errorMessage,
});

export const findAllAsyncActionCreator = () => {
    return (dispatch, getStore) => {
        dispatch(findAllStartActionCreator());
        findAll()
            .catch(error => {
                dispatch(findAllNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(findAllNokActionCreator('Error: generico'))
                } else {
                    dispatch(findAllOkActionCreator(response.data))
                }
            });
    }
}

// find by id
const findByIdStartActionCreator = () => ({
    type: POST_FIND_BY_ID_START,
    payload: null,
});

const findByIdOkActionCreator = (data) => ({
    type: POST_FIND_BY_ID_OK,
    payload: data,
});

const findByIdNokActionCreator = (errorMessage) => ({
    type: POST_FIND_BY_ID_NOK,
    payload: errorMessage,
});

export const findByIdAsyncActionCreator = (id) => {
    return (dispatch, getStore) => {
        dispatch(findByIdStartActionCreator());
        findById(id)
            .catch(error => {
                dispatch(findByIdNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(findByIdNokActionCreator('Error: generico'))
                } else {
                    dispatch(findByIdOkActionCreator(response.data))
                }
            });
    }
}

// find by id
const saveStartActionCreator = () => ({
    type: POST_SAVE_START,
    payload: null,
});

const saveOkActionCreator = (data) => ({
    type: POST_SAVE_OK,
    payload: data,
});

const saveNokActionCreator = (errorMessage) => ({
    type: POST_SAVE_NOK,
    payload: errorMessage,
});

export const saveAsyncActionCreator = (POST) => {
    debugger;
    return (dispatch, getStore) => {
        dispatch(saveStartActionCreator());
        save(POST)
            .catch(error => {
                dispatch(saveNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(saveNokActionCreator('Error: Reasons'))
                } else {
                    dispatch(saveOkActionCreator(response.data))
                }
            });
    }
}


const startActionCreator = () => ({
    type: POST_UPDATE_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: POST_UPDATE_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: POST_UPDATE_ERROR,
    payload: errorMessage,
})

export const updateActionsAsyncCreator = (data, id) => {
    debugger;
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        const jwt = getStore().auth.token;
        update(jwt, data, id).then(data => {
            dispatch(successActionCreator(data.data));
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}