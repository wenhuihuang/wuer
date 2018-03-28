import * as ActionTypes from '../actions/ActionTypes'
import {Success,Failure} from '../../../global/tools'


export default function homeReducer(state={list:[],topJob:[],news:[],todos:[],personList:[]},action){
    switch (action.type){
        //请求成功(这个暂时不用)
        case Success(ActionTypes.FETCH_HOTJOB):
            return Object.assign({},{
                ...state,
                list:state.list.concat(action.list)
            })
        //全站首页职位
        case Success(ActionTypes.FETCH_TOPJOB):
            return Object.assign({},{
                ...state,
                topJob:action.list
            })
        //全站首页资讯
        case Success(ActionTypes.FETCH_NEWS):
            return Object.assign({},{
                ...state,
                news:action.list
            })
            //全职首页推荐人才
        case Success(ActionTypes.FETCH_PERSON_LIST):
            return Object.assign({},{
                ...state,
                personList:action.list
            })
      
        default :
            return state;
    }
}
