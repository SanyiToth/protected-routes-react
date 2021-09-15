import React from 'react';
import {Card, Content, Heading, Image, Media} from "react-bulma-components";

function UserProfileCard({user}) {
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
                        <Heading size={4}>{user.name}</Heading>
                        <Heading subtitle size={6}>
                            Tel.: {user.phone} <br/>
                            Email: {user.email}<br/>
                            {`Address: ${user.address.zipcode}, ${user.address.city}, ${user.address.street} ${user.address.suite}`}
                        </Heading>
                    </Media.Item>
                </Media>
            </Card.Content>
        </Card>
    );
}

export default UserProfileCard;
