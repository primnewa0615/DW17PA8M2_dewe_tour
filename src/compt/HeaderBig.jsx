import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../asset/style.css";
import logo from '../asset/img/logo.png';
import avatar from '../asset/img/avatar.png';


function HeaderBig() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="wrapHead">
            <div className="jumboTron">
                <Container>
                    <Row>
                        <Col><img src={logo} alt="" /></Col>
                        {isLoggedIn ? <Col>
                            <button className="btnRegis">Register</button>
                            <button className="btnLogin">Login</button>
                        </Col> : <div className="avatar"><img src={avatar} alt="" /></div>}


                    </Row>
                    <Row><Col><h1>Explore</h1></Col></Row>
                    <Row><Col><h2>Your Amazing City Together</h2></Col></Row>
                    <Row><Col><p>Find great places to holliday</p></Col></Row>
                    <Row><Col><input type="text" /><button className="btnSearch">Search</button></Col></Row>
                </Container>
            </div>
        </div>
    )
}

export default HeaderBig
