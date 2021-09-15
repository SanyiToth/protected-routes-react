import React from 'react';
import {Icon, Navbar} from "react-bulma-components";
import './Header.css';

function Header({Logout, user}) {

    const loggedInUser = user[0];
    return (
        <div>
            <Navbar color="primary" className="Header">

                <Navbar.Menu>
                    <Navbar.Container align="right">
                        <Navbar.Item hoverable={true}>
                            <Navbar.Link arrowless={true}>
                                {/* <i className="fa fa-user-circle" aria-hidden="true"/>*/}
                                {loggedInUser.name}
                            </Navbar.Link>
                            <Navbar.Dropdown right={true}>
                                <Navbar.Item flexDirection="column" alignItems="center">
                                    {loggedInUser.name}
                                    <Navbar.Divider/>
                                    <span>
                                        <Icon>
                                    <i className="fas fa-phone"/>
                                        </Icon>
                                        {loggedInUser.phone}
                                    </span>
                                    <span>  <i className="far fa-envelope"/>
                                        {loggedInUser.email}
                                    </span>
                                </Navbar.Item>

                                <Navbar.Item onClick={Logout} justifyContent="center">
                                    Logout
                                </Navbar.Item>

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
