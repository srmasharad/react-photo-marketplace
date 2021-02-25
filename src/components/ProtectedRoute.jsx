import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ path, component: Component, render, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>{
                if(localStorage.getItem('pm-token') === null)
                    return <Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }} />
                return Component ? <Component {...props} /> : render(props)
            }}
        />
    );
}
 
export default ProtectedRoute;