import {types} from "./cartActions"

const initialState = {
    hidden: true
}

export default (state = initialState, { type }) => {
    switch (type) {

    case types.TOGGLE_CART_HIDDEN:
        return { ...state, hidden: !state.hidden }

    default:
        return state
    }
}
