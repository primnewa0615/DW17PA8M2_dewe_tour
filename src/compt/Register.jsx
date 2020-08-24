import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bunga from '../asset/img/bunga1.png';
import palm from '../asset/img/palm.png';

function Login(props) {
    return (
        <div className="containerModalR">

            <Row style={{ width: "416px" }}>
                <Col xs="4"><img src={palm} alt="" className="palm" /></Col>
                <Col xs="5"  ><h1>Register</h1></Col>
                <Col xs="3" style={{ position: "relative" }}><img src={bunga} alt="" className="bunga" style={{ position: "absolute", right: "0" }} /></Col>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <label for="name">Full Name</label><br />
                        <input id="name" type="text" /><br /><br />
                    </Col>
                </Row>
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
                        <label for="phone">Phone</label><br />
                        <input id="phone" type=" text" /><br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button>Register</button>
                    </Col>
                </Row>

            </Container>
        </div>



    )
}



export default Login
