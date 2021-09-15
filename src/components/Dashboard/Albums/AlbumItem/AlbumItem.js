import React, {useState} from 'react';
import {Box, Button, Card, Content, Heading, Media, Modal} from "react-bulma-components";
import './AlbumItem.css'
import AlbumModal from "../AlbumModal/AlbumModal";

function AlbumItem({album}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Card className="AlbumItem" key={album.id} style={{width: 300, margin: 'auto'}}>
            <Card.Content>
                <Media>
                    <Media.Item>
                        <Heading onClick={() => setIsModalOpen(true)} size={4}>Album Id {album.id}</Heading>
                    </Media.Item>
                </Media>
            </Card.Content>
            <AlbumModal album={album} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </Card>
    );
}

export default AlbumItem;
