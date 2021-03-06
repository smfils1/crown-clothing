import {types} from "./userActions"

const initialState = {
    currentUser:null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.SET_CURRENT_USER:
        return { ...state, currentUser:payload }

    default:
        return state
    }
}
