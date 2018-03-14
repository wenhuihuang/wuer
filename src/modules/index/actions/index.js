import * as ActionTypes from './ActionTypes'


export const changeIsMenuAction=(is)=>{
    return {
        type:ActionTypes.STATIC_CHANGE_ISMENU,
        is
    }
}
