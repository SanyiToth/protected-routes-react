import React from 'react';
import {Route, Redirect} from "react-router-dom";

function ProtectedRoute({isAuth: isAuth, component: Component, Logout: Logout, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth) {
                    return <Component Logout={Logout}/>;
                } else {
                    return (<Redirect to={{pathname: '/', state: {from: props.location}}}/>);
                }
            }}/>
    );
}

export default ProtectedRoute;
