import React, {useState} from 'react';
import {Card, Heading, Media} from "react-bulma-components";
import './AlbumItem.css'
import AlbumModal from "../AlbumModal/AlbumModal";

function AlbumItem({album}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (

            <Card className="AlbumItem" key={album.id} >
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading onClick={() => setIsModalOpen(true)} size={4}>Album ID: {album.id}</Heading>
                        </Media.Item>
                    </Media>
                </Card.Content>
                <AlbumModal album={album} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            </Card>

    );
}

export default AlbumItem;
