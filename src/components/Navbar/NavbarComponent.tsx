import React from "react";
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import { AppState } from "../../store"
import { Product } from "../../types/Product"
import { connect } from "react-redux"


interface NavbarProps {
}

interface NavbarState {
}

type Props = NavbarProps & LinkStateProps

class NavbarComponent extends React.Component<Props, NavbarState>{
    static defaultProps = { cartItems: [] }

    render() {
        const { cartItems } = this.props

        let totalQty = cartItems.length > 0 ? cartItems.map(product => {
            return product.qty;
        }).reduce((accumulator: number, currentValue: number) => accumulator + currentValue) : 0;

        return (<Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src=""
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                WhiteAway
            </Navbar.Brand>
            <Link to="/cart" className="btn btn-outline-light ml-auto">Cart {totalQty} <i className="fas fa-shopping-cart"></i></Link>
        </Navbar>)
    }
}

interface LinkStateProps {
    cartItems: Product[]
}

const mapStateToProps = (
    state: AppState,
    ownProps: NavbarProps): LinkStateProps => ({
        cartItems: state.cart
    })

export default connect(
    mapStateToProps,
    null
)(NavbarComponent);