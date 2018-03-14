import { STATIC_CHANGE_ISMENU  } from '../actions/ActionTypes'


export default function globalReducer(state = { showMenu: true }, action) {
    switch (action.type) {
        case STATIC_CHANGE_ISMENU:
            return Object.assign({}, state, {
                showMenu: action.is
            })
        default:
            return state;
    }
}
