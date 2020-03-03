import React from "react"
import "../Cart/cart.css"
import { bindActionCreators } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { connect } from "react-redux"
import { getProducts } from "../../actions/products"
import { Product } from "../../types/Product"
import { AppActions } from "../../types/actions"
import { AppState } from "../../store"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

interface CartProps {
}

interface CartState {
}

type Props = CartProps & LinkStateProps & LinkDispatchProps

class ProductList extends React.Component<Props, CartState>{

    render() {
        const { cart } = this.props
        let totalPrice = cart.length > 0 ? cart.map(product => {
            return product.qty * product.price;

        }).reduce((accumulator: number, currentValue: number) => accumulator + currentValue) : 0;
        return (
            <Container className="cart-container">
                {cart.length == 0 ? "No items added to cart" : <Table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart && cart.map(product => (
                            <tr key={product.npkId}>
                                <td>{product.productId}</td>
                                <td>{product.name}</td>
                                <td><img width={50} src={product.image} /></td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td>{product.qty}</td>
                                <td>{product.price * product.qty}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={7} ><h2 className="cart-total">Total: {totalPrice} DKK</h2></td>
                        </tr>
                    </tbody>
                </Table>}

            </Container>
        );
    }
}

interface LinkStateProps {
    cart: Product[]
}

interface LinkDispatchProps {

}

const mapStateToProps = (
    state: AppState,
    ownProps: CartProps): LinkStateProps => ({
        cart: state.cart
    })

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: CartProps
): LinkDispatchProps => ({
    getProducts: bindActionCreators(getProducts, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
