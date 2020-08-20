import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../asset/style.css';
import barcode from '../asset/img/barcode.png';
import logo from '../asset/img/logo.png';

function HistoryTrip() {
    return (
        <div className="wrapUniversal">
            <div className="containerHistoryTrip">
                <Container>
                    <Row md="9">
                        <Col md="9"><img src={logo} alt="" className="logo" /></Col>
                        <Col md="3">
                            <h1>Booking</h1>
                            <p className="date">Saturday, 22 July 2020</p>
                        </Col>
                    </Row>

                    <Row md="9">
                        <Col>
                            <Row>
                                <Col md="6">
                                    <h3>6D/4N Fun Tassie Vacation </h3>
                                    <p className="greyThin">Australia</p>
                                </Col>
                                <Col>
                                    <p className="blackThin">Date Trip</p>
                                    <p className="greyThin">26 Agustus 2020</p>
                                </Col>
                                <Col>
                                    <p className="blackThin">Duration</p>
                                    <p className="greyThin">6 Day 4 Night</p>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md="6"><p className="statusApprove">Approve</p></Col>
                                <Col>
                                    <p className="blackThin">Accomodation</p>
                                    <p className="greyThin">6 Day 4 Night</p>
                                </Col>
                                <Col>
                                    <p className="blackThin">Transportation</p>
                                    <p className="greyThin">6 Day 4 Night</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col md="3">
                            <img src={barcode} alt="" className="barcode" />
                        </Col>

                    </Row>
                    <br />
                    <Row md="12">
                        <table>
                            <tr>
                                <th>No</th>
                                <th>FullName</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th></th>
                                <th></th>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Prima k</td>
                                <td>Male</td>
                                <td>089632254384</td>
                                <td id="qtyTotal">Qty</td>
                                <td id="qtyTotal">:&nbsp; &nbsp;  1</td>
                            </tr>

                            <tr style={{ border: "none" }}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td id="qtyTotal">Total</td>
                                <td id="redPrice">:&nbsp; &nbsp; IDR. 12398000</td>
                            </tr>
                        </table>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HistoryTrip;
