import * as ActionTypes from './ActionTypes'

export function fetchClassifyAction(){
    return{
        type:ActionTypes.FETCH_CLASSIFY,
    }
}
export function fetchMajorAction(){
    return{
        type:ActionTypes.FETCH_MAJOR,
    }
}