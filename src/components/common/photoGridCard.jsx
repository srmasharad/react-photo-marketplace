import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import { addItem } from "../../redux/cart/cart.actions";

const PhotoGridCard = ({ item, addItem }) => {
    const { path } = useRouteMatch()
    const { id, url, photographer, comment_count } = item

    return (
        <div className="card">
            <Link to={`${path}/${id}`} className="photo-link">
                <img src={url} className="card-img-top" alt="card-img" />
            </Link>
            <div className="photo-item-info">
                <Link to="">@{photographer}</Link>
                <div className="icon-wrap">
                    <span className="mr-4" onClick={() => {
                        addItem(item)
                        toast.success("Item Added To Cart. Go To Checkout")
                    }}><i className="fi fi-rr-shopping-cart-add"></i></span>
                    <Link to={`${path}/${id}`}><i className="fi fi-rr-comment"></i> <span>{comment_count}</span></Link>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
 
export default connect(null, mapDispatchToProps)(PhotoGridCard);