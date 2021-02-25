import { Link, useRouteMatch } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
    const { url } = useRouteMatch()
    return (
        <footer className="site-footer py-4 bg-light">
            <div className="container">
                <div className="footer-info">
                    <Link to={url}>
                        <Logo />
                    </Link>
                    <small className="d-inline text-muted">© {new Date().getFullYear()} Photo Marketplace.</small>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;