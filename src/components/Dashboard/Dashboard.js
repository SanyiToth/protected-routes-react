import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import ListOfAlbums from "./ListOfAlbums/ListOfAlbums";
import Header from "./Header/Header";

function Dashboard({Logout, user}) {

    const [albums, setAlbums] = useState([]);


    const getAlbums = async (id) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
        return await response.json();
    }


    useEffect(() => {
            const userID = user[0].id;
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
            <ListOfAlbums albums={albums}/>
        </div>
    );
}

export default withRouter(Dashboard);
