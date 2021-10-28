import React, { Component } from 'react'
import { connect } from "react-redux"

class Buger extends Component {
    renderBurger = () => {
        return (
            this.props.menu.map((product) => {
                return (
                    Array(product.amount).fill({}).map((item, index) => {
                        return (
                            <div key={`${product.name}_${index}`} className={product.name.toLowerCase()}></div>
                        )
                    })
                )
            })
        )
    }

    render() {
        return (
            <div>
                <h1 className="mb-5 text-danger">Bánh Burger Của Bạn</h1>
                <div className="breadTop">
                </div>
                <div>
                    {this.renderBurger()}
                </div>
                <div className="breadBottom">
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        menu: state.OrderbugerReducer.menu
    })
}

export default connect(mapStateToProps)(Buger)