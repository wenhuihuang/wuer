import * as ActionTypes from '../actions/ActionTypes'
import {Success,Failure} from '../../../global/tools'


export default function conditionReducer(state={classify:[],major:[],province:[],city:[]},action){
    switch (action.type){
        //请求成功
        case Success(ActionTypes.FETCH_CLASSIFY):
            return Object.assign({},{
                ...state,
                classify:action.list
            })
        default :
            return state;
    }
}
