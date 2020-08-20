import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../asset/style.css';
import fotoProfile from '../asset/img/fotoProfile.png';
import vector from '../asset/img/Vector.png';
import vector1 from '../asset/img/Vector-1.png';
import vector2 from '../asset/img/Vector-2.png';
import vector3 from '../asset/img/Vector-3.png';


function Profile() {
    return (
        <div className="wrapUniversal">
            <div className="containerProfile">
                <Container>
                    <Row>
                        <Col md="7">
                            <Container>
                                <Row> <Col> <h1>Personal Info</h1></Col> </Row>
                                <Row className="personalInfo">
                                    <Col xs="0"><img src={vector} alt="" /></Col>
                                    <Col>
                                        <p className="black">Prima InshaAllah Surga</p>
                                        <p className="grey">Full Name</p>
                                    </Col>
                                </Row>

                                <Row className="personalInfo">
                                    <Col xs="0"><img src={vector1} alt="" /></Col>
                                    <Col>
                                        <p className="black">Prima@DumbWays.com</p>
                                        <p className="grey">Email</p>
                                    </Col>
                                </Row>

                                <Row className="personalInfo">
                                    <Col xs="0"><img src={vector2} alt="" /></Col>
                                    <Col>
                                        <p className="black">0859-4688-7490</p>
                                        <p className="grey">Mobile Phone</p>
                                    </Col>
                                </Row>

                                <Row className="personalInfo">
                                    <Col xs="0"><img src={vector3} alt="" /></Col>
                                    <Col>
                                        <p className="black">Jurumudi, gang Ambon, samping Al-Mukhlisin</p>
                                        <p className="grey">Address</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col md="5">
                            <img src={fotoProfile} alt="" /><br /><br />
                            <button className="btnChangePhoto">Change Photo Profile</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Profile;
