import * as ActionTypes from './ActionTypes'

export function fetchClassifyAction(){
    return{
        type:ActionTypes.FETCH_CLASSIFY,
    }
}
export function fetchMajorAction(params){
    return{
        type:ActionTypes.FETCH_MAJOR,
        params
    }
}

export function fetchProvinceAction(){
    return{
        type:ActionTypes.FETCH_PROVINCE
    }
}
export function fetchCityAction(params){
    return{
        type:ActionTypes.FETCH_CITY,
        params
    }
}

export function changeCurrentAction(obj){
    return {
        type:ActionTypes.STATIC_CHANGE_CURRENT,
        obj
    }
}

export function clearMajorAction(){
    return {
        type:ActionTypes.STATIC_CLEAR_MAJOR
    }
}

export function clearCityAction(){
    return {
        type:ActionTypes.STATIC_CLEAR_CITY
    }
}