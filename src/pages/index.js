import React, { Component } from "react"
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom"
import { connect } from "react-redux"

import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"

const mapStateToProps = (state /*, ownProps*/) => {
    return ({
        isLoading: state.commonReducer.isLoading
    })
}

class Pages extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container py-2">
                <div className="d-flex justify-content-between bg-dark p-2 rounded align-items-center">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="text-white px-2" style={{ fontSize: 22, fontWeight: "lighter" }}>ExpenseBook</div>
                    </div>
                    <div className="d-flex flex-grow-1 justify-content-end">
                        <div className="p-2"><Link to="/">Home</Link></div>
                        <div className="p-2"><Link to="/expense-form">New Expense</Link></div>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route path="/expense-form">
                            <ExpenseForm />
                        </Route>
                        <Route path="/" >
                            <ExpenseList />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </div>
                { this.props.isLoading && <div className="" style={{ position: "absolute", top: "40%", left: "50%" }}>
                    <div className="p-4 border shadow shadow-lg text-white font-weight-bold bg-secondary rounded" style={{ position: "relative", left: "-50%"}}>LOADING</div>
                </div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Pages)