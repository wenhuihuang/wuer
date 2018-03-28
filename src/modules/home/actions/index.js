import * as ActionTypes from './ActionTypes'

export function fetchHotJobAction(){
    return{
        type:ActionTypes.FETCH_HOTJOB,
    }
}
export function fetchTopJobAction(){
    return{
        type:ActionTypes.FETCH_TOPJOB,
    }
}
export function fetchNewsAction(){
    return {
        type:ActionTypes.FETCH_NEWS
    }
}
//以下为测试数据
export function fetchPersonListAction(){
    return {
        type:ActionTypes.FETCH_PERSON_LIST,
    }
}
