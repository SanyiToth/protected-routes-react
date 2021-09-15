import React, {useState} from 'react';
import {Box, Button, Content, Media, Modal} from "react-bulma-components";


function AlbumModal({album,isModalOpen, setIsModalOpen}) {



    return (
        <div>
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Content>
                    <Box>
                        <Media src='https://bulma.io/images/placeholders/128x128.png'>
                            <Content>
                                <p>
                                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                    pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                                    feugiat facilisis.
                                </p>
                            </Content>

                        </Media>
                    </Box>
                </Modal.Content>
            </Modal>


        </div>
    );
}

export default AlbumModal;
