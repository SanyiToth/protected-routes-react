import React from 'react';
import {Icon, Navbar} from "react-bulma-components";
import './Header.css';
import UserProfileCard from "./UserProfileCard/UserProfileCard";

function Header({Logout, user}) {

    const loggedInUser = user[0];

    return (
        <div>
            <Navbar color="success" className="Header">

                <Navbar.Menu>
                    <Navbar.Container align="right">
                        <Navbar.Item hoverable={true}>
                            <Navbar.Link arrowless={true}>
                                {loggedInUser.username}
                            </Navbar.Link>
                            <Navbar.Dropdown right={true}>
                                <UserProfileCard loggedInUser={loggedInUser}/>
                            </Navbar.Dropdown>
                        </Navbar.Item>

                        <Navbar.Item onClick={Logout}>
                            <Icon>
                                <i className="fas fa-sign-out-alt"/>
                            </Icon>
                        </Navbar.Item>

                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </div>
    );
}

export default Header;
