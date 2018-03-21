import * as ActionTypes from './ActionTypes'

export function fetchResumeListAction(){
    return{
        type:ActionTypes.FETCH_RESUMELIST,
    }
}
export function fetchResumeDetailAction(){
    return{
        type:ActionTypes.FETCH_RESUMEDETAIL,
    }
}
