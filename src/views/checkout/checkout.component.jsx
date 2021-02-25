import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from 'reselect'
import StripeCheckoutButton from "../../components/common/StripeButton";
import { addItem, decreaseItem, removeItemFromCart } from "../../redux/cart/cart.actions";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

const Checkout = ({ cartItems, total, removeItem, addItem, decreaseItem }) => {
    return (
        <main className="site-main py-5">
            <div className="container">
                <h1 className="h4 mb-5">Checkout</h1>
                <table className="table checkout-table">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Photographer</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(cartItem => <tr key={cartItem.id}>
                            <th><Link to={`/customer/${cartItem.id}`}><img src={cartItem.url} width={25} alt="cartImage"/></Link></th>
                            <td>@{cartItem.photographer}</td>
                            <td>
                                <span className="inc-btn" onClick={() => decreaseItem(cartItem)}><i className="fi-rr-minus-small"></i></span>
                                <span className="value">{cartItem.quantity}</span>
                                <span className="inc-btn" onClick={() => addItem(cartItem)}><i className="fi fi-rr-plus-small"></i></span>
                            </td>
                            <td>${cartItem.price}</td>
                            <td>
                                <button type="button" onClick={() => removeItem(cartItem)} className="btn btn-danger btn-sm mr-2"><i className="fi  fi-rr-cross-small"></i></button>
                                <a href={cartItem.url} className="btn btn-primary btn-sm" target="_blank" download rel="noopener noreferrer"><i className="fi  fi-rr-download"></i></a>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                <h1 className="h6 text-right py-2">Estimated Total: ${total}</h1>
                {cartItems.length > 0 && <>
                    <div className="pay-now">
                        <StripeCheckoutButton price={total} />
                    </div>
                    <div className="demo-card-info text-center mt-5">
                        <p>* Please use the following test credit card for payments *</p>
                        <h1 className="h5">4242 4242 4242 4242 - Exp: 01.25 - CVV: 123</h1>
                    </div>
                </>}
            </div>
        </main>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);