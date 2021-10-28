import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItemAction, removeItemAction } from '../redux/actions/OrderBugerAction'

class Menu extends Component {

    renderMenu = () => {
        return this.props.menu.map((item, index) => {
            return (
                <tr key={index}>
                    <td className="text-left pl-4">{item.name}</td>
                    <td>
                        <button className="btn btn-danger mr-2 py-0"
                            onClick={() => { this.props.removeItem(item.name) }}>-</button>
                        {item.amount}
                        <button className="btn btn-success ml-2 py-0"
                            onClick={() => { this.props.addItem(item.name) }}>+</button>
                    </td>
                    <td>{item.price}</td>
                    <td>{item.amount * item.price}</td>
                </tr>
            )
        })
    }

    renderTotal = () => {
        return (
            this.props.menu.reduce((total, item, index) => {
                return (
                    total += item.amount * item.price
                )
            }, 0)
        )
    }

    render() {
        return (
            <div>
                <h1 className="mb-5 text-info">Chọn Thức Ăn</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Thức Ăn</th>
                            <th>Số Lượng</th>
                            <th>Đơn Giá</th>
                            <th>Thành Tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMenu()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="3" className="text-right">Tổng Tiền:</th>
                            <th>{this.renderTotal()}</th>
                        </tr>
                    </tfoot>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        menu: state.OrderbugerReducer.menu
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addItem: (name) => {
            dispatch(addItemAction(name))
        },

        removeItem: (name) => {
            dispatch(removeItemAction(name))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)