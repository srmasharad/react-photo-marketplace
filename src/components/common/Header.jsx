import { Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link, useRouteMatch } from "react-router-dom";
import Logo from "./Logo";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const Header = ({ itemCount }) => {
    const { path } = useRouteMatch()
    
    const logout = () => localStorage.removeItem('pm-token')
    
    return (
        <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <Link className="py-2" to={path}>
                    <Logo />
                </Link>
                <div className="headers-icon-group">
                    <Link to={`${path}/checkout`} className="py-2 d-none d-md-inline-block mr-4"><i className="fi fi-rr-shopping-cart" /><Badge variant="warning">{itemCount}</Badge></Link>

                    <Link to="" onClick={logout} className="py-2 d-none d-md-inline-block"><i className="fi  fi-rr-sign-out" /></Link>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})
 
export default connect(mapStateToProps)(Header);