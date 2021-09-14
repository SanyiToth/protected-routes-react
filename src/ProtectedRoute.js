import React from 'react';
import {Route, Redirect} from "react-router-dom";

function ProtectedRoute({isLoggedIn, user, component: Component, Logout, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isLoggedIn) {
                    return <Component Logout={Logout} user={user}/>;
                } else {
                    return (<Redirect to={{pathname: '/', state: {from: props.location}}}/>);
                }
            }}/>
    );
}

export default ProtectedRoute;
