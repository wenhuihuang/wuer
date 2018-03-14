import {FETCH_TODO,STATIC_ADD_TODO} from '../actions/ActionTypes'
import {Success,Failure} from '../../../global/tools'


export default function homeReducer(state={todos:[]},action){
    switch (action.type){
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
