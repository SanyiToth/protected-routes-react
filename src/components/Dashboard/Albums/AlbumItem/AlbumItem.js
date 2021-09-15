import React from 'react';
import {Card, Heading, Media} from "react-bulma-components";
import './AlbumItem.css'

function AlbumItem({album}) {

    return (
        <Card className="AlbumItem" style={{width: 300, margin: 'auto'}}>
            <Card.Content>
                <Media>
                    <Media.Item>
                        <Heading size={4}>Album Id {album.id}</Heading>
                    </Media.Item>
                </Media>
            </Card.Content>
        </Card>
    );
}

export default AlbumItem;
