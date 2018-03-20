import * as ActionTypes from '../actions/ActionTypes'
import {Success,Failure} from '../../../global/tools'


export default function conditionReducer(state={
    classify:[],
    major:[],
    province:[],
    city:[],
    current:{
        currentClassify:{id:'',text:'分类'}, //{id:22,text:'分类'}
        currentMajor:{id:'',text:'专业'},
        currentProvince:{id:"",text:'省份'},
        currentCity:{id:'',text:'城市'}
    }
   
},action){
    let current_var={}
    switch (action.type){
        
        //请求成功
        case Success(ActionTypes.FETCH_CLASSIFY):
            return Object.assign({},{
                ...state,
                classify:action.list
            })
        case Success(ActionTypes.FETCH_MAJOR):
            //保存在localstorage
            current_var = Object.assign({},state.current,{
                currentMajor:{id:'',text:'专业'}
            })
            saveLocalStorage(current_var)
            return Object.assign({},{
                ...state,
                major:action.list,
                current:current_var
            })
        case Success(ActionTypes.FETCH_PROVINCE):
            return Object.assign({},{
                ...state,
                province:action.list
        })
        case Success(ActionTypes.FETCH_CITY):
            //保存在localstorage
            current_var = Object.assign({},state.current,{
                currentCity:{id:'',text:'城市'}
            })
            saveLocalStorage(current_var)
            return Object.assign({},{
                ...state,
                city:action.list,
                current:current_var
        })
        case ActionTypes.STATIC_CHANGE_CURRENT:
            //保存在localstorage
            current_var = Object.assign({},state.current,action.obj)
            saveLocalStorage(current_var)
            return Object.assign({},{
                ...state,
                current:current_var
        })
        case ActionTypes.STATIC_CLEAR_MAJOR:
            //保存在localstorage
            current_var = Object.assign({},state.current,{
                currentMajor:{id:'',text:'专业'},
            })
            saveLocalStorage(current_var)
            return Object.assign({},{
                ...state,
                current:current_var,
                major:[]
        })
        case ActionTypes.STATIC_CLEAR_CITY:
            //保存在localstorage
            current_var = Object.assign({},state.current,{
                currentCity:{id:'',text:'城市'}
            })
            saveLocalStorage(current_var)
            return Object.assign({},{
                ...state,
                current:current_var,
                city:[]
        })
        default :
            return state;
    }
}

function saveLocalStorage(current){
    window.localStorage.setItem('current_condition',JSON.stringify(current))
}