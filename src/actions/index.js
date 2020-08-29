import types from "./types"

export const addNewExpense = payload => {
    return next => {
        next(changeLoading(true))
        setTimeout(() => {
            next ({
                type: types.ADD_NEW_EXPENSE,
                payload: payload
            })
            next(changeLoading(false))
        }, 1000)
    }
}

export const changeLoading = payload => {
    return ({
        type: types.CHANGE_LOADING,
        payload: payload
    })
}

export const changeExpenseForm = payload => {
    return ({
        type: types.CHANGE_EXPENSE_FORM,
        payload: payload
    })
}