import * as ActionTypes from '../actions/ActionTypes'

//全局共用
export default function globalReducer(state = { 
    showMenu: true,
    title:'首页',
    notHead:false,
    popup:{ //弹框
        isShow:false,
        isClose:false,
        type:"",
        style:{
            top:0,
            bottom:0
        }
    },
    addr:{ //顶部选中的地址
        oneL:{
            text:"请选择",
            value:''
        },
        twoL:{
            text:"",
            value:''
        }
    }
}, action) {
    switch (action.type) {
        case ActionTypes.STATIC_CHANGE_ISMENU: //是否显示头部菜单
            return Object.assign({}, state, {
                showMenu: action.is
            })
        case ActionTypes.STATIC_CHANGE_POPUP: //是否显示弹框
            return Object.assign({}, state, {
                popup:Object.assign({},state.popup,action.popup)
            })
       case ActionTypes.STATIC_CHANGE_TITLE://修改标题
            return Object.assign({},state,{
                title:action.title
            })
        case ActionTypes.STATIC_CHANGE_ADDR://修改标题
            return Object.assign({},state,{
                addr:action.obj
        })
        default:
            return state;
    }
}
