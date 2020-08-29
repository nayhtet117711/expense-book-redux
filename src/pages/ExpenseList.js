import React, { Component } from "react"
import { connect  } from "react-redux"

const mapStateToProps = (state /*, ownProps*/) => {
    return ({
        expenseList: state.expenseReducer.expenseList,
        expenseTotal: state.expenseReducer.expenseTotal
    })
}

class ExpenseList extends Component {    

    render() {
        const { expenseList=[], expenseTotal=0 } = this.props

        const expenseListView = expenseList.map((expense,k) => (
            <div key={k} className="d-flex justify-content-between p-2 list-group-item">
                <div className="font-weight-bold">{expense.name}</div>
                <div className="">${expense.cost}</div>
            </div>
        ))

        return (
            <div className="p-2">
                <div className="d-flex justify-content-between">
                    <div className="text-muted">{expenseList.length} Records</div>
                    <div className=""><span className="text-secondary">Total: </span>${expenseTotal}</div>
                </div>
                <div className="list-group py-2">{expenseListView}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ExpenseList);
