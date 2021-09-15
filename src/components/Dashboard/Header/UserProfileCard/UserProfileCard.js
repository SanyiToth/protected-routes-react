import React from 'react';
import {Card, Content, Heading, Image, Media} from "react-bulma-components";

function UserProfileCard({loggedInUser}) {
    return (
        <Card style={{width: 300, margin: 'auto'}}>
            <Card.Content>
                <Media alignItems="center">
             {/*       <Media.Item align="left">
                        <Image
                            size={true}
                            alt="user-pic"
                            src="https://pic.onlinewebfonts.com/svg/img_24787.png"
                        />
                    </Media.Item>*/}
                    <Media.Item>
                        <Heading size={4}>{loggedInUser.name}</Heading>
                        <Heading subtitle size={6}>
                            Tel.: {loggedInUser.phone} <br/>
                            Email: {loggedInUser.email}<br/>
                            {`Address: ${loggedInUser.address.zipcode}, ${loggedInUser.address.city}, ${loggedInUser.address.street} ${loggedInUser.address.suite}`}
                        </Heading>
                    </Media.Item>
                </Media>
            </Card.Content>
        </Card>
    );
}

export default UserProfileCard;
