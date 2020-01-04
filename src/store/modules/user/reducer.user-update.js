import {
    USER_UPDATE_START,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_ERROR,
} from './const';

const initialState = {
    data: {},
    error: null,
    success: null,
    errorMessage: '',
    loading: false,
};

const updateReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case USER_UPDATE_START:
            return {
                ...prevState,
                loading: true,
            };

        case USER_UPDATE_SUCCESS:
            debugger;
            return {
                ...prevState,
                data: action.payload,
                loading: false,
                error: false,
                success: true,
            };

        case USER_UPDATE_ERROR:
            debugger;
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
            };

        default:
            return prevState;
    }
}

export default updateReducer;