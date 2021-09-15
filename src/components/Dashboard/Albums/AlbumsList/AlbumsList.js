import React from 'react';
import AlbumItem from "../AlbumItem/AlbumItem";
import "./AlbumList.css";

function AlbumsList({albums}) {


    return (
        <div className="AlbumsList">
            {albums.map((album) =>
                <AlbumItem album={album}/>)}
        </div>
    );

}

export default AlbumsList;
