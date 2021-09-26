import React from "react";

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import tonLogo from '../../assets/ton-logo.png'

const Header = () => {
    return(
       <Navbar bg="white" expand="lg">
        <Container>
            <Navbar.Brand href="home">
                <img 
                    src={tonLogo}
                    alt="ton-logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="home">Produtos</Nav.Link>
                <Nav.Link href="home">Planos e Taxas</Nav.Link>
                <Nav.Link href="home">Renda Extra</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="home">Atendimento</Nav.Link>
                <Nav.Link href="home">Baixe o App</Nav.Link>
                <Nav.Link href="user">User Info</Nav.Link>
                <Nav.Link href="createUser">Create User</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Header; 