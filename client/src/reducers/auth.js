import * as actionTypes from '../constants/actionTypes.js';

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case actionTypes.AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
            return { ...state, authdata: action.data, loading: false, error: null };
        case actionTypes.LOGOUT:
            localStorage.clear();
            return {...state, authdata: null, loading: false, error: null};
        default:
            return state;
    }
};

export default authReducer;