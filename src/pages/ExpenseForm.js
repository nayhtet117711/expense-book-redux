import React, { Component } from "react"
import { connect } from "react-redux"
import { addNewExpense, changeExpenseForm } from "../actions"

const mapStateToProps = (state) => {
    return ({
        expenseList: state.expenseReducer.expenseList,
        expenseForm: state.expenseReducer.expenseForm,
        expenseTotal: state.expenseReducer.expenseTotal
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({ 
        addNewExpense: expense => dispatch(addNewExpense(expense)),
        changeExpenseForm: expenseForm => dispatch(changeExpenseForm(expenseForm))
    })
}

class ExpenseForm extends Component {
    
    constructor() {
        super()
    }

    handleStateChanged = stateData => {
        this.props.changeExpenseForm(stateData)
    }

    handleExpenseAdderSubmit = e => {
        e.preventDefault()
        const { expenseName, expenseCost } = this.props.expenseForm
        this.props.addNewExpense({ 
            name: expenseName,
            cost: expenseCost
        })
        this.clearForm()
    }

    clearForm = () => {
        this.props.changeExpenseForm({ 
            expenseName: "",
            expenseCost: 0
        })
    }

    render() {
        const { expenseList=[], expenseTotal=0 } = this.props
        return (
            <div className="p-2">
                <div className="d-flex justify-content-between">
                    <div className="text-muted">{expenseList.length} Records</div>
                    <div className=""><span className="text-secondary">Total: </span>${expenseTotal}</div>
                </div>
                <div className="">
                    <form onSubmit={this.handleExpenseAdderSubmit}>
                        <div className="form-group py-2">
                            <label htmlFor="expenseName">Expense Name:</label>
                            <input className="form-control" name="expenseName" required type="text" value={this.props.expenseForm.expenseName} onChange={e => this.handleStateChanged({ expenseName: e.target.value })} />
                        </div>
                        <div className="form-group py-2">
                            <label htmlFor="expenseCost">Expense Cost:</label>
                            <input className="form-control" name="expenseCost" required type="number" value={this.props.expenseForm.expenseCost} onChange={e => this.handleStateChanged({ expenseCost: e.target.value })} />
                        </div>
                        <div className="py-2">
                            <input className="btn btn-primary btn-block" type="submit" value="ADD" /> 
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
