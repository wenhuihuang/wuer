import * as ActionTypes from '../actions/ActionTypes'

//全局
export default function globalReducer(state = { 
    showMenu: true,
    title:'首页',
    popup:{
        isShow:false,
        isClose:false,
        style:{
            top:0,
            bottom:0
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
        default:
            return state;
    }
}
