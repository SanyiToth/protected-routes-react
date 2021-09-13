import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";

function Dashboard({Logout}) {

    const [albums, setAlbums] = useState([]);


    const getAlbums = async () => {
        let response = await fetch("  https://jsonplaceholder.typicode.com/albums");
        return await response.json();
    }


    useEffect(() => {
            getAlbums()
                .then(data => {
                    setAlbums(data);
                })
                .catch(() => {
                    setAlbums([]);
                })
        },
        [])

    return (
        <div>
            <h1>If you see this, it means you are authenticated.</h1>
            <button onClick={Logout}>LOGOUT</button>
        </div>
    );
}

export default withRouter(Dashboard);
