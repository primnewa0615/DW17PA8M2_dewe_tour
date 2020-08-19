import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../asset/style.css";
import logo from '../asset/img/logo.png';
import avatar from '../asset/img/avatar.png';

function HeaderKecil() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <div className="headerKecil">
            <div className="containerHederKecil">
                <Container>
                    <Row>
                        <Col><img src={logo} alt="" /></Col>
                        {!isLoggedIn ? <Col>
                            <button className="btnRegis">Register</button>
                            <button className="btnLogin">Login</button>
                        </Col> : <div className="avatar"><img src={avatar} alt="" /></div>}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HeaderKecil;
