import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../style/component-style/Topbar.css'

const Topbar = () => {
    return (
        <div>
            <Navbar style={{background: "#081429"}}>
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">
                        <img className="logo" alt="" src="https://img-cdn.b17g.net/b9cdbd69-4bbb-4324-a54e-aaf1fadb3454/Star_None_x300.png" />
                    </Navbar.Brand>
                </Nav>
                <Nav className="m-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Skrive her for å søke..." style={{background: "none", border: "1px solid grey", paddingRight: "100px"}}/>
                        <Button style={{border: "1px solid grey", background: "gray"}}>Søk</Button>
                    </Form>
                </Nav>
                <Nav className="ml-auto">
                    <Button style={{background: "#fd6100", fontSize: "12px"}} >LOGG PÅ</Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Topbar;