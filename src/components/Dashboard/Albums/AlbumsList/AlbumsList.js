import React from 'react';
import AlbumItem from "../AlbumItem/AlbumItem";

function AlbumsList({albums}) {


    return (
        <div className="AlbumList">
            {albums.map((album) =>
                <AlbumItem git album={album}/>)}
        </div>
    );

}

export default AlbumsList;
