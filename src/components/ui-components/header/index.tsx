import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LinksApp from "../../containers/appRouter/linksApp";
import { routesConfiguration } from "../../containers/appRouter/config"

export default function NavBarApp() {
    return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Resto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinksApp routes={routesConfiguration} />
            </Nav>
        </Navbar.Collapse>
    </Navbar>)
}



