import * as ActionTypes from '../actions/ActionTypes'
import {Success,Failure} from '../../../global/tools'


export default function jobReducer(state={jobList:[],jobDetail:{}},action){
    switch (action.type){
        //请求成功
        case Success(ActionTypes.FETCH_JOBLIST):
            return Object.assign({},{
                ...state,
                jobList:state.jobList.concat(action.list)
            })
        case Success(ActionTypes.FETCH_JOBDETAIL):
            return Object.assign({},{
                ...state,
                jobDetail:action.jobDetail
            })
        default :
            return state;
    }
}
