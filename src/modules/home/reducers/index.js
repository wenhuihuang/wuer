import * as ActionTypes from '../actions/ActionTypes'
import {Success,Failure} from '../../../global/tools'


export default function homeReducer(state={list:[],news:[],todos:[]},action){
    console.log(action)
    switch (action.type){
        //请求成功
        case Success(ActionTypes.FETCH_HOTJOB):
            return Object.assign({},{
                ...state,
                list:state.list.concat(action.list)
            })
        case Success(ActionTypes.FETCH_NEWS):
            return Object.assign({},{
                ...state,
                news:state.news.concat(action.list)
            })
        //以下为测试数据
        case ActionTypes.STATIC_ADD_TODO:
            return Object.assign({},state,{
                todos:[
                    ...state.todos,
                    action.text
                ]
            })
        case Success(ActionTypes.FETCH_TODO):
            return Object.assign({},state,{
                todos:[
                    ...state.todos,
                    action.text
                ]
            })
        default :
            return state;
    }
}
