import { combineReducers } from 'redux'

import globalReducer from '../modules/index/reducers/index'
import homeReducer from '../modules/home/reducers'

export const RootReducer = combineReducers({
    globalReducer,
    homeReducer
})