import { call, put,takeEvery } from 'redux-saga/effects'
import * as HomeActions from '../modules/home/actions/ActionTypes'

import {Success,Failure} from '../global/tools'

import API from '../api/api'

const FetchActions=[HomeActions.FETCH_TODO];

function* fetchData(action) {
    let type=action.type;
    console.log('start action:'+type)
    try {
        console.log('=========Action RUN================')
        const data = yield call(API.fetch,{name:'test'});
        yield put({type: Success(type), text:data.text});
        console.log('=========Dispatch '+Success(type)+'================')
    } catch (error) {
        yield put({type: Failure(type), error});
        console.log('=========Dispatch '+Failure(type)+'================')
        console.log(error)
    }
}

function* staticData(action){
    yield put({type: action.type, action});
}

function* watchFetchData() {
    //action 数组匹配、所有action type在数组中的action都会被监控
    yield takeEvery(FetchActions, fetchData);
}

export default function* rootSaga() {
    yield [
        watchFetchData()
    ]
}