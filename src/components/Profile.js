import React from 'react';
import {withRouter} from "react-router-dom";

function Profile() {
    return (
        <div>
            If you see this, it means you are autenticated.
        </div>
    );
}

export default withRouter(Profile);
