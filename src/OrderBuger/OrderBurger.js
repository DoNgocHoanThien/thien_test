import React, { Component } from 'react'
import Buger from './Buger'
import Menu from './Menu'
import './OrderBuger.css'

export default class OrderBurger extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-12 display-3 my-5 pt-5 text-success">BÀI TẬP ORDER BURGER</h1>
                    <div className="col-7">
                        <Buger />
                    </div>
                    <div className="col-5">
                        <Menu />
                    </div>
                </div>
            </div>
        )
    }
}
