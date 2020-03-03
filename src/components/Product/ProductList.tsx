import React from "react"
import { getProducts } from "../../actions/products"
import { addToCart, increaseQty, decreaseQty, removeFromCart } from "../../actions/cart"
import { Product } from "../../types/Product"
import { AppState } from "../../store"
import { bindActionCreators } from "redux";
import { AppActions } from "../../types/actions";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { ProductCard } from "./ProductCard"
import Row from "react-bootstrap/Row"

interface ProductListProps {
}

interface ProductListState {
}

type Props = & ProductListProps & LinkStateProps & LinkDispatchProps

export class ProductList extends React.Component<Props, ProductListState>{

    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        const { products, loading, error } = this.props
        if (loading) {
            return (
                <div>Loading...</div>
            )
        } else if (error) {
            return (
                <div>Error {error}</div>
            )
        } else {
            return (
                <Row className="product-list-conatiner">{products && products.map(product => (
                    <ProductCard product={product} key={product.npkId} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} increaseQty={this.props.increaseQty} decreaseQty={this.props.decreaseQty} />
                ))}
                </Row>
            );
        }

    }
}

interface LinkStateProps {
    products: Product[]
    loading: boolean
    error: string
}

interface LinkDispatchProps {
    getProducts: () => void
    addToCart: (product: Product) => void
    removeFromCart: (id: string) => void
    increaseQty: (id: string, qty: number) => void
    decreaseQty: (id: string, qty: number) => void
}

const mapStateToProps = (
    state: AppState,
    ownProps: ProductListProps): LinkStateProps => ({
        products: state.product.products,
        loading: state.product.loading,
        error: state.product.error
    })

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: ProductListProps
): LinkDispatchProps => ({
    getProducts: bindActionCreators(getProducts, dispatch),
    addToCart: bindActionCreators(addToCart, dispatch),
    removeFromCart: bindActionCreators(removeFromCart, dispatch),
    increaseQty: bindActionCreators(increaseQty, dispatch),
    decreaseQty: bindActionCreators(decreaseQty, dispatch)

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
