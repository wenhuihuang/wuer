import * as ActionTypes from './ActionTypes'

export function fetchJobListAction(){
    return{
        type:ActionTypes.FETCH_JOBLIST,
    }
}
export function fetchJobDetailAction(){
    return{
        type:ActionTypes.FETCH_JOBDETAIL,
    }
}
