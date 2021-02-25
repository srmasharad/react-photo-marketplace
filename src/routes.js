import { Route, Switch } from "react-router-dom"
import { ToastContainer, Slide } from 'react-toastify'
import Admin from "./components/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from './views/login/login.component'
import PageNotFound from "./views/pagenot-found/pagenot-found.component";
import SignUpForm from "./views/signup/signup.component";

const BaseRouter = (props) => {
    return (
        <>
            <ToastContainer 
                autoClose={5000}
                pauseOnVisibilityChange={false}
                draggable={false}
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                position="top-center"
                hideProgressBar
                closeOnClick={false}
                rtl={false}
                transition={Slide}
            />
            <Switch>
                <Route exact path="/" component={LoginForm} />
                <Route path="/register" component={SignUpForm} />
                <ProtectedRoute path="/customer"component={Admin} {...props} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </>
    );  
}
 
export default BaseRouter;