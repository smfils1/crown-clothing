const types = {
    SET_CURRENT_USER:"SET_CURRENT_USER"
}

const setCurrentUser = user => ({
    type: types.SET_CURRENT_USER,
    payload: user
})

export {
    setCurrentUser,
    types
}