import React from 'react';
import {Card, Columns, Content, Heading, Image, Media} from "react-bulma-components";

function ListOfAlbums({albums}) {



    const listItems = albums.map((album) =>
        <Columns.Column key={album.id}>
            <Card  style={{width: 300, margin: 'auto'}}>
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading size={4}>{album.id}</Heading>
                        </Media.Item>
                    </Media>
                    <Content>
                        {album.title}
                    </Content>
                </Card.Content>
            </Card>
        </Columns.Column>);

    return (
        <div className="ListOfAlbums">
            <Columns>
                {listItems}
            </Columns>
        </div>
    );

}

export default ListOfAlbums;
