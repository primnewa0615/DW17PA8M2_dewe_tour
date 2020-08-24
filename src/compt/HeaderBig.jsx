import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../asset/style.css";
import logo from '../asset/img/logo.png';
import avatar from '../asset/img/avatar.png';
import Login from '../compt/Login';
import Register from '../compt/Register';


function HeaderBig() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [display, setDisplay] = useState("none");
    function showModal() {
        setDisplay("block")
    }
    function hideModal() {
        setDisplay("none")
    }


    const [displayR, setDisplayR] = useState("none");
    function showModalR() {
        setDisplayR("block")
    }
    function hideModalR() {
        setDisplayR("none")
    }

    return (
        <div className="wrapHead">
            <div className="jumboTron">
                <Container>
                    <Row>
                        <Col><img src={logo} alt="" /></Col>
                        {isLoggedIn ?
                            <div className="avatar"><img src={avatar} alt="" /></div>

                            :
                            <Col>
                                <button className="btnRegis" onClick={showModalR}>Register</button>
                                <button className="btnLogin" onClick={showModal} >Login</button>
                            </Col>
                        }

                    </Row>
                    <Row><Col><h1>Explore</h1></Col></Row>
                    <Row><Col><h2>Your Amazing City Together</h2></Col></Row>
                    <Row><Col><p>Find great places to holliday</p></Col></Row>
                    <Row><Col><input type="text" className="search" /><button className="btnSearch">Search</button></Col></Row>
                </Container>
            </div>
            <div className="wrapModal" style={{ display: display }}>
                <p className="close" onClick={hideModal} >X</p>
                <Login />
            </div>
            <div className="wrapModalR" style={{ display: displayR }}>
                <p className="close" onClick={hideModalR} >X</p>
                <Register />
            </div>
        </div >
    )
}

export default HeaderBig
