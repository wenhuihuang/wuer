import { call, put,takeEvery } from 'redux-saga/effects'

import {Success,Failure} from '../global/tools'

import API from '../api/api'


export function* fetchResumeList(action) {
    let type=action.type;
    console.log('start action:'+type)
    try {
        console.log('=========请求职位列表================')
        const data = yield call(API.fetch,{name:'resumeList'}); //发起ajax请求 name为请求类型
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
export function* fetchResumeDetail(action) {
    let type=action.type;
    console.log('start action:'+type)
    try {
        console.log('=========请求职位列表================')
        const data = yield call(API.fetch,{name:'resumeDetail'}); //发起ajax请求 name为请求类型
        console.log(data)
        yield put({type: Success(type), resumeDetail:data.data});
        console.log('=========Dispatch '+Success(type)+'================')
    } catch (error) {
        yield put({type: Failure(type), error});
        console.log('=========Dispatch '+Failure(type)+'================')
        console.log(error)
    }
    console.log('fetch-end')
}


