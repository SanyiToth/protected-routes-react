import React from 'react';
import {Heading, Media} from "react-bulma-components";

function UserProfileCard({user}) {
    return (
        <Media style={{width: 300, padding: 15, margin: 'auto'}}>
            <Media.Item>
                <Heading size={4}>{user.name}</Heading>
                <Heading subtitle size={6}>
                    <strong>Tel.:</strong> {user.phone} <br/>
                    <strong>Email:</strong> {user.email}<br/>
                    <strong>Address:</strong> {user.address.zipcode}, {user.address.city},
                    {user.address.street} {user.address.suite}
                </Heading>
            </Media.Item>
        </Media>

    );
}

export default UserProfileCard;
