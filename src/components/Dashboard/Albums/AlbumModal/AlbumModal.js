import {Box, Content, Media, Modal} from "react-bulma-components";


function AlbumModal({album, isModalOpen, setIsModalOpen}) {


    return (
        <div>
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Content>
                    <Box>
                        <Media>
                            <Content>
                                <h3>Album ID <strong>{album.id}</strong></h3>
                                <br/>
                                <h4>
                                    {album.title}
                                </h4>
                            </Content>
                        </Media>
                    </Box>
                </Modal.Content>
            </Modal>


        </div>
    );
}

export default AlbumModal;
