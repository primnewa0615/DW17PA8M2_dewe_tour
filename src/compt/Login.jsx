import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bunga from '../asset/img/bunga1.png';
import palm from '../asset/img/palm.png';

function Login(props) {
    return (
        <div className="containerModal">

            <Row style={{ width: "416px" }}>
                <Col xs="4"><img src={palm} alt="" className="palm" /></Col>
                <Col xs="5"  ><h1>Login</h1></Col>
                <Col xs="3" style={{ position: "relative" }}><img src={bunga} alt="" className="bunga" style={{ position: "absolute", right: "0" }} /></Col>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <label for="email">Email</label><br />
                        <input id="email" type="email" /><br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label for="password">Password</label><br />
                        <input id="password" type="password" /><br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button>Login</button>
                    </Col>
                </Row>
                <Row><Col><p>Don't have an account? ? Klik Here</p></Col></Row>
            </Container>
        </div>



    )
}



export default Login
