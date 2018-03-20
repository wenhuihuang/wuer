import { call, put,takeEvery } from 'redux-saga/effects'
import * as ConditionActions from '../modules/common/actions/ActionTypes'

import {Success,Failure} from '../global/tools'

import API from '../api/api'


export function* fetchClassify(action) {
    let type=action.type;
    console.log('start action:'+type)
    try {
        console.log('=========请求分类================')
        const data = yield call(API.fetch,{name:'classify'}); //发起ajax请求 name为请求类型
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

export function* fetchMajor(action) {
    let type=action.type;
    let params = action.params
    console.log('start action:'+type)
    try {
        console.log('=========请求专业================')
        const data = yield call(API.fetch,{name:'major',params}); //发起ajax请求 name为请求类型
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

export function* fetchProvince(action) {
    let type=action.type;
    console.log('start action:'+type)
    try {
        console.log('=========请求省份================')
        const data = yield call(API.fetch,{name:'province'}); //发起ajax请求 name为请求类型
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

export function* fetchCity(action) {
    let type=action.type;
    let params = action.params
    console.log('start action:'+type)
    try {
        console.log('=========请求城市================')
        const data = yield call(API.fetch,{name:'city',params}); //发起ajax请求 name为请求类型
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
