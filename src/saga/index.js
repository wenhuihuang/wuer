import { call, put,takeEvery,takeLatest,fork } from 'redux-saga/effects'
import * as HomeActions from '../modules/home/actions/ActionTypes'
import * as ConditionActions from '../modules/common/actions/ActionTypes'
import * as JobActions from '../modules/job/actions/ActionTypes'
import * as ResumeActions from '../modules/resume/actions/ActionTypes'

import {Success,Failure} from '../global/tools'

import API from '../api/api'

const FetchActions=[HomeActions.FETCH_TODO];

//导入saga
import fetchHotJob from './hotJob'
import fetchHomeNews from './homeNews'
import * as Job from './job'
import * as Resume from './resume'
import * as Home from './home'

import * as Condition from './condition'


function* fetchData(action) {
    let type=action.type;
    console.log('start action:'+type)
    try {
        console.log('=========Action RUN================')
        const data = yield call(API.fetch,{name:'test'}); //发起ajax请求 name为请求类型
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
    console.log('进入watch')
    //action 数组匹配、所有action type在数组中的action都会被监控
   yield takeEvery(FetchActions, fetchData);
   yield takeLatest(HomeActions.FETCH_HOTJOB, fetchHotJob);
   yield takeLatest(HomeActions.FETCH_NEWS, fetchHomeNews);
   yield takeLatest(HomeActions.FETCH_TOPJOB, Home.fetchTopJob); //全职首页
   yield takeLatest(HomeActions.FETCH_PERSON_LIST, Home.fetchPersonList); //全职推荐人才
   yield takeLatest(ConditionActions.FETCH_CLASSIFY, Condition.fetchClassify); //条件选择-分类
   yield takeLatest(ConditionActions.FETCH_MAJOR, Condition.fetchMajor); //条件选择-专业major
   yield takeLatest(ConditionActions.FETCH_PROVINCE, Condition.fetchProvince); //条件选择-省份
   yield takeLatest(ConditionActions.FETCH_CITY, Condition.fetchCity); //条件选择-城市
   yield takeLatest(JobActions.FETCH_JOBLIST, Job.fetchJobList); //职位列表
   yield takeLatest(JobActions.FETCH_JOBDETAIL, Job.fetchJobDetail); //职位详情
   yield takeLatest(ResumeActions.FETCH_RESUMELIST, Resume.fetchResumeList); //简历列表
   yield takeLatest(ResumeActions.FETCH_RESUMEDETAIL, Resume.fetchResumeDetail); //职位详情
   
   
 
}


export default function* rootSaga() {
    yield [
        watchFetchData()
    ]
    // yield fork (watchFetchData)
}