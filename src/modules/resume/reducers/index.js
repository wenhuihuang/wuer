import * as ActionTypes from '../actions/ActionTypes'
import {Success,Failure} from '../../../global/tools'


export default function resumeReducer(state={list:[],resumeDetail:{}},action){
    switch (action.type){
        //请求成功
        case Success(ActionTypes.FETCH_RESUMELIST):
            return Object.assign({},{
                ...state,
                list:state.list.concat(action.list)
            })
        case Success(ActionTypes.FETCH_RESUMEDETAIL):
            return Object.assign({},{
                ...state,
                resumeDetail:action.resumeDetail
            })
        default :
            return state;
    }
}
