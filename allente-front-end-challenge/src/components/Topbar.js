import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../style/component-style/Topbar.css'

const Topbar = () => {
    return (
        <div>
            <Navbar style={{background: "#081429"}}>
                <Navbar.Brand href="/">
                        <img className="logo" alt="" src="https://img-cdn.b17g.net/b9cdbd69-4bbb-4324-a54e-aaf1fadb3454/Star_None_x300.png" />
                </Navbar.Brand>

                <Form inline style={{marginLeft: "25%"}}>
                    <FormControl type="text" placeholder="Skrive her for å søke..." style={{background: "none", border: "1px solid grey"}}/>
                    <Button style={{border: "1px solid grey", background: "gray"}}>Søk</Button>
                </Form>

                <Button style={{background: "#fd6100", fontSize: "12px", marginLeft: "40%"}} >LOGG PÅ</Button>
            </Navbar>
        </div>
    )
}

export default Topbar;



{
    // Recycled Code
    /* Without React Bootstrap
<div className="topbar topbar-background">
    <div className="topbar-content">

        <div>
            <img className="topbar-logo" src="https://img-cdn.b17g.net/b9cdbd69-4bbb-4324-a54e-aaf1fadb3454/Star_None_x300.png" alt="" />
        </div>

        <div className="searchbar-content">
            <input className="searchbox" placeholder="Skrive her for å søke..."></input>
            <button className="search-btn">Søk</button>
        </div>

        <div>
            <button className="loginbtn">Logg på</button>
        </div>
    </div>  
</div>

*/}