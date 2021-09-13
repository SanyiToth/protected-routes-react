import React from 'react';
import {withRouter} from "react-router-dom";

function Profile({Logout}) {


    return (
        <div>
            <h1>If you see this, it means you are authenticated.</h1>
            <button onClick={Logout}>LOGOUT</button>
        </div>
    );
}

export default withRouter(Profile);
