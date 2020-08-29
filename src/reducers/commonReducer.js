import actionTypes from "../actions/types"

const inititalState = {
    isLoading: false
}

const commonReducer = (state = inititalState, action) => {
    if (action.type === actionTypes.CHANGE_LOADING) {
        return ({ ...state, isLoading: action.payload })
    }
    return state
}

export default commonReducer