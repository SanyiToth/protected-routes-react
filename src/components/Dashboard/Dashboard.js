import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import AlbumsList from "./Albums/AlbumsList/AlbumsList";
import Header from "./Header/Header";
import './Dashboard.css';

function Dashboard({Logout, user}) {

    const [albums, setAlbums] = useState([]);


    const getAlbums = async (id) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
        return await response.json();
    }


    useEffect(() => {
            const userID = user.id;
            getAlbums(userID)
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
            <Header Logout={Logout} user={user}/>
            <AlbumsList albums={albums}/>
        </div>
    );
}

export default withRouter(Dashboard);
