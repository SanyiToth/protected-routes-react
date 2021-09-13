import React from 'react';

function ListOfAlbums({albums}) {

    const listItems = albums.map((album) => <li key={album.id}>{album.title}</li>);

    return (
        <div>
           hello
        </div>
    );

}

export default ListOfAlbums;
