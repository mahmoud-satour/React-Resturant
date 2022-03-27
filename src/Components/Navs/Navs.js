import React from 'react';
import "./Navs.css"
import {Navbar , Nav ,Container } from 'react-bootstrap';
import Logo from "../../images/logo.png";

function Navs() {
    return (
        <div>
            <Navbar  expand="lg" className='fixed-top shadow'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} title='Logo' alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <Nav.Link href="#home" >home</Nav.Link>
                        <Nav.Link href="#about us" >about us</Nav.Link>
                        <Nav.Link href="#explore foods" >explore foods</Nav.Link>
                        <Nav.Link href="#reviews" >reviews</Nav.Link>
                        <Nav.Link href="#faq" >faq</Nav.Link>
                        <Nav.Link href='' id='lastNav'>1800789123</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navs;
