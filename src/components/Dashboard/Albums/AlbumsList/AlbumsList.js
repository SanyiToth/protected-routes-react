import React from 'react';
import AlbumItem from "../AlbumItem/AlbumItem";

function AlbumsList({albums}) {


    return (
        <div className="ListOfAlbums">
            {albums.map((album) =>
                <AlbumItem album={album}/>)}
        </div>
    );

}

export default AlbumsList;
