import {combineReducers} from 'redux';

import auth from './auth';
import profile from './profile';
import category from './category';

export const reducers = combineReducers({
    auth,
    profile,
    category
});