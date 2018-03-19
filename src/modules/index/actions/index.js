import * as ActionTypes from './ActionTypes'


export const changeIsMenuAction=(is)=>{
    return {
        type:ActionTypes.STATIC_CHANGE_ISMENU,
        is
    }
}

/**弹框 */
export const changePopupAction=(popup)=>{
    return{
        type:ActionTypes.STATIC_CHANGE_POPUP,
        popup
    }
}

/**修改标题 */
export const changeTitleAction=(title)=>{
    return {
        type:ActionTypes.STATIC_CHANGE_TITLE,
        title
    }
}
