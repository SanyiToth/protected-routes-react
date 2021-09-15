import React, {useState} from 'react';
import {Icon, Navbar} from "react-bulma-components";
import UserProfileCard from "./UserProfileCard/UserProfileCard";

function Header({Logout, user}) {

    const loggedInUser = user[0];
    const [isActive, setIsActive] = useState(false);
    const clickOnName = () => {
        (isActive) ? setIsActive(false) : setIsActive(true);
    }


    return (
        <div>
            <Navbar color="success" className="Header">
                <Navbar.Menu>
                    <Navbar.Container align="right">
                        <Navbar.Item active={isActive} onClick={clickOnName}>
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
