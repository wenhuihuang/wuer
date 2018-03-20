import { combineReducers } from 'redux'

import globalReducer from '../modules/index/reducers/index'
import homeReducer from '../modules/home/reducers'
import conditionReducer from '../modules/common/reducers/index'
import jobReducer from '../modules/job/reducers/index'

export const RootReducer = combineReducers({
    globalReducer,
    homeReducer,
    conditionReducer,
    jobReducer
})