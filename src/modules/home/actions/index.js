import * as ActionTypes from './ActionTypes'

export function fetchHotJobAction(){
    return{
        type:ActionTypes.FETCH_HOTJOB,
    }
}
export function fetchNewsAction(){
    return {
        type:ActionTypes.FETCH_NEWS
    }
}
//以下为测试数据
export function addTodoAction(text){
    return {
        type:ActionTypes.STATIC_ADD_TODO,
        text
    }
}

export function fetchTodoAction(){
    return {
        type:ActionTypes.FETCH_TODO
    }
}