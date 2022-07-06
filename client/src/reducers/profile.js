import * as ActionTypes from '../constants/actionTypes.js';

const profileReducer = (state = {profileData : null}, action ) => {
    // const {type, payload } = action;
    switch (action.type) {
        case ActionTypes.GET_PROFILE:
            return {...state, profileData: action.payload};
        default:
            return state;
    }
}

export default profileReducer;