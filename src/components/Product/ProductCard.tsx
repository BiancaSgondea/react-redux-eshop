import React, { MouseEvent } from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import { Product } from '../../types/Product'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


interface ProductProps {
    product: Product;
    addToCart: (product: Product) => void;
    removeFromCart: (id :string) => void
    increaseQty: (id: string, qty: number) => void;
    decreaseQty: (id: string, qty: number) => void;
}
interface ProductState {

    qty: number;
}
type Props = & ProductProps

export class ProductCard extends React.Component<Props, ProductState>{
    public state: ProductState = { qty: 0 };

    public increaseQty = (event: MouseEvent) => {
        let {qty} = this.state
        event.preventDefault()
        this.setState({
            qty: ++qty
        }, () => {

            if (qty <= 1) {
                this.props.addToCart(this.props.product)
            }
            this.props.increaseQty(this.props.product.npkId, this.state.qty)
        })
    }
    public decreaseQty = (event: MouseEvent) => {
        let {qty} = this.state
        event.preventDefault()
       
        this.setState({
            qty: --qty
        }, () => {

            if (this.state.qty == 0) {
                this.props.removeFromCart(this.props.product.npkId.toString())
            }
            this.props.decreaseQty(this.props.product.npkId, this.state.qty)
        })
    }
    render() {
        const { npkId, image, price, url, brand, name } = this.props.product
        const {qty}=this.state

        return (
            <Col xs={12} sm={6} md={4} className="product-container" key={npkId} >
                <Card className="card-container">
                    <Card.Img className="product-image" src={image} />
                    <Card.Body>
                        <Card.Title> <a target="blank" href={"http://" + url}> {brand}</a></Card.Title>
                        <Card.Text className="product-name">{name}</Card.Text>
                        <Card.Text><b>{price}</b>,-</Card.Text>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <Button variant="outline-secondary" disabled={qty== 0 ? true : false} onClick={this.decreaseQty}>-</Button>
                            </InputGroup.Prepend>
                            <FormControl
                                className="product-qty"
                                readOnly
                                type="number" 
                                placeholder={this.state.qty.toString()}
                                aria-label="no of items added to cart"
                                aria-describedby="basic-addon2"

                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={this.increaseQty}>+</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}