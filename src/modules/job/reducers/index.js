import * as ActionTypes from '../actions/ActionTypes'
import {Success,Failure} from '../../../global/tools'


export default function jobReducer(state={jobList:[]},action){
    switch (action.type){
        //请求成功
        case Success(ActionTypes.FETCH_JOBLIST):
            return Object.assign({},{
                ...state,
                jobList:state.jobList.concat(action.list)
            })
        default :
            return state;
    }
}
