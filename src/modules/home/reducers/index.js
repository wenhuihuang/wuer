import {FETCH_HOTJOB,FETCH_TODO,STATIC_ADD_TODO} from '../actions/ActionTypes'
import {Success,Failure} from '../../../global/tools'


export default function homeReducer(state={list:[],todos:[]},action){
    console.log(action)
    switch (action.type){
        //请求成功
        case Success(FETCH_HOTJOB):
            return Object.assign({},{
                ...state,
                list:[
                    ...state.list,
                    action.list
                ]
            })
        //以下为测试数据
        case STATIC_ADD_TODO:
            return Object.assign({},state,{
                todos:[
                    ...state.todos,
                    action.text
                ]
            })
        case Success(FETCH_TODO):
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
