import actionTypes from "../actions/types"

const tmpExpense = { name: "Expense 1 ", cost: 100 }

const inititalState = {
    expenseList: [ tmpExpense ],
    expenseForm: {
        expenseName: "",
        expenseCost: 0
    },
    expenseTotal: tmpExpense.cost
}

const expenseReducer = (state = inititalState, action) => {
    switch(action.type) {
        case actionTypes.ADD_NEW_EXPENSE :
            const newState = ({ ...state, expenseList: [...state.expenseList, action.payload] })
            return ({ ...newState, expenseTotal: newState.expenseList.reduce((r, c) => parseInt(r) + parseInt(c.cost),0) })
        case actionTypes.CHANGE_EXPENSE_FORM:
            return ({ ...state, expenseForm: {...state.expenseForm, ...action.payload} })
        default:
            return state 

    }
    // if (action.type === actionTypes.ADD_NEW_EXPENSE) {
    //     return ({ ...state, expenseList: [...state.expenseList, action.payload] })
    // } else if (action.type === actionTypes.CHANGE_EXPENSE_FORM) {
    //     return ({ ...state, expenseForm: action.payload })
    // }
    // return state
}

export default expenseReducer