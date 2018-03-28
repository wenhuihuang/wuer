import { call, put,takeEvery } from 'redux-saga/effects'
import * as ConditionActions from '../modules/job/actions/ActionTypes'

import {Success,Failure} from '../global/tools'

import API from '../api/api'

//职位列表
export function* fetchTopJob(action) {
    let type=action.type;
    console.log('start action:'+type)
    try {
        console.log('=========请求全职职位列表================')
        const data = yield call(API.fetch,{name:'homeTopJob'}); //发起ajax请求 name为请求类型
        console.log(data)
        yield put({type: Success(type), list:data.data});
        console.log('=========Dispatch '+Success(type)+'================')
    } catch (error) {
        yield put({type: Failure(type), error});
        console.log('=========Dispatch '+Failure(type)+'================')
        console.log(error)
    }
    console.log('fetch-end')
}
//全职推荐人才
export function* fetchPersonList(action) {
    let type=action.type;
    try {
        const data = yield call(API.fetch,{name:'personList'}); //发起ajax请求 name为请求类型
        console.log(data)
        yield put({type: Success(type), list:data.data});
    } catch (error) {
        yield put({type: Failure(type), error});
        console.log(error)
    }
    console.log('fetch-end')
}




