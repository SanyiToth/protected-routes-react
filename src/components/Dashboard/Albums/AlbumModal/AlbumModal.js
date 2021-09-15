import {Box, Content, Media, Modal} from "react-bulma-components";


function AlbumModal({album, isModalOpen, setIsModalOpen}) {


    return (
        <div>
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Content>
                    <Box>
                        <Media src='https://bulma.io/images/placeholders/128x128.png'>
                            <Content>
                                <p>
                                    <small>Album ID</small> <strong>{album.id}</strong>
                                    <br/>
                                    {album.title}
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
