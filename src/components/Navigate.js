import React, {Component} from 'react';
import {Navbar, Nav, NavItem,MenuItem,NavDropdown} from 'react-bootstrap';

export default class Navigate extends Component{
    state ={}
    render(){
        return(
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <strong>CareFinder Menu</strong>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href='/'>
                                Home
                            </NavItem>
                            <NavDropdown eventKey={2} title="Access" id="access-dropdown">
                                <MenuItem eventKey={2.1} href='IntructionsApiKey'>Intructions for APIKEY</MenuItem>
                                <MenuItem eventKey={2.2} href='GenerateApiKey'>Get APIKEY</MenuItem>
                                <MenuItem eventKey={2.3} href='VerifyApiKey'>Verify APIKEY</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Hospitals" id="hospital-dropdown">
                                <MenuItem eventKey={3.1} href='Hospitals'>Get Hospitals</MenuItem>
                                <MenuItem eventKey={3.2} href='AddHospital'>Add Hospitals</MenuItem>
                                <MenuItem eventKey={3.3} href='UpdateHospital'>Update Hospitals</MenuItem>
                                <MenuItem eventKey={3.4}href='RemoveHospital'>Remove Existing Hospitals</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={4} href='Contact'>
                                Contact
                            </NavItem>
                            <NavItem eventKey={4} href='Login'>
                                Login
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}