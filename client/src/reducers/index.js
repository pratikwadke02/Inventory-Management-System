import {combineReducers} from 'redux';

import auth from './auth';
import profile from './profile';
import category from './category';
import product from './product';

export const reducers = combineReducers({
    auth,
    profile,
    category,
    product
});