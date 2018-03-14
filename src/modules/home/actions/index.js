import * as ActionTypes from './ActionTypes'


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