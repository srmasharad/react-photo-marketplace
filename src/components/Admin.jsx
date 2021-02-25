import loadable from '@loadable/component'
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Comments from '../views/comments/comments.component';
const Checkout = loadable(() => import("../views/checkout/checkout.component"));
const HomePage = loadable(() => import("../views/homepage/homepage.component"))

const Admin = () => {
    const { path } = useRouteMatch()
    
    return (
        <>
            <Header />
            <Switch>
                <Route exact path={path} component={HomePage} />
                <Route path={`${path}/checkout`} component={Checkout} />
                <Route path={`${path}/:comments`} component={Comments} />
            </Switch>
            <Footer />
        </>

    );
}
 
export default Admin;