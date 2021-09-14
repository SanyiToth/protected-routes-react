import React from 'react';
import {Box, Dropdown, Icon, Navbar,} from "react-bulma-components";
import './Header.css';

function Header({Logout, user}) {





    return (
        <div>
            <Navbar color="link" className="Header">

                <Navbar.Menu>
                    <Navbar.Container align="right">
                        <Navbar.Item href="#" hoverable={true}>

                            <Navbar.Link align="left">
                                <i className="fa fa-user-circle" aria-hidden="true"/>
                            </Navbar.Link>

                            <Navbar.Dropdown>
                                <Navbar.Item href="#">Valami Valami Valami ValamiV alami



                                </Navbar.Item>
                            </Navbar.Dropdown>
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
