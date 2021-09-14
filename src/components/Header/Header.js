import React from 'react';
import {Box, Dropdown, Icon, Navbar,} from "react-bulma-components";
import './Header.css';

function Header({Logout, user}) {
    return (
        <div>


            <Navbar color="link" className="Header">

                <Navbar.Menu>
                    <Navbar.Container align="right">
                        <Navbar.Item>
                            <Navbar.Link>
                                User
                            </Navbar.Link>


                        </Navbar.Item>
                        <Navbar.Item onClick={Logout}>
                            Logout
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </div>
    );
}

export default Header;
