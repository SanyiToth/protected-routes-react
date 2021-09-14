import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import ListOfAlbums from "./ListOfAlbums";
import Header from "./Header/Header";

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
        <div className="Dashboard">
            <Header Logout={Logout}/>
            <ListOfAlbums albums={albums}/>
        </div>
    );
}

export default withRouter(Dashboard);
