import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import '../asset/style.css';
import logo from '../asset/img/logoB.png';
import axios from 'axios';
import struct from '../asset/img/struct.png';
import moment from 'moment';

function Approvment({ display, idTransaction, setDisplay, count, setCount, total, setTotal }) {
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(false);
    const displayChange = () => {
        setDisplay("none")
    }
    const [transaction, setTransaction] = useState([]);
    const [user, setUser] = useState([]);
    const [trip, setTrip] = useState([]);
    const [country, setCountry] = useState([]);

    const [show, setShow] = useState(false);
    const [showCancel, setShowCancel] = useState(false);
    const d = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5001/api/v1/transac/${idTransaction}`,
            {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        )
            .then(res => {
                const trans = res.data.data;
                setTransaction(trans);
                setUser(trans.user);
                setTrip(trans.trip);
                setCountry(trans.trip.country);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [show || showCancel || idTransaction]);

    const cancel = () => {

        axios.patch(`http://localhost:5001/api/v1/transaction/${idTransaction}`, { status: "Cancel" }, {
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => {
            setShow(true); setCount(count + 1);
            axios.get(`http://localhost:5001/api/v1/sumCounterQty/${trip.id}`)
                .then(res => setTotal(res.data.data)).catch(err => console.log(err));

        }).catch(err => console.log(err));

    }

    const approve = () => {
        axios.patch(`http://localhost:5001/api/v1/transaction/${idTransaction}`, { status: "Approve" }, {
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => {
            setShow(true); setCount(count + 1);
            axios.get(`http://localhost:5001/api/v1/sumCounterQty/${trip.id}`)
                .then(res => setTotal(res.data.data)).catch(err => console.log(err));

        }).catch(err => console.log(err));

    }

    useEffect(() => {

        axios.patch(`http://localhost:5001/api/v1/trip/${trip.id}`,
            { totalCounterQty: total }
        ).then(console.log("berhasil")).catch(err => console.log(err));

        axios.get("http://localhost:5001/api/v1/trip"
        ).then(console.log("berhasil")).catch(err => console.log(err))


    }, [total]);


    const handleClose = () => { setShow(false); setShowCancel(false); };
    return (
        <div className="modalApprovment" style={{ display: display }} onDoubleClick={displayChange} >
            {loading ? <p>Loading...</p> :
                <div className="containerHistoryTrip" style={{ margin: "2% auto" }}>
                    <Container>
                        <Row md="9">
                            <Col md="9"><img src={logo} alt="" className="logo" /></Col>
                            <Col md="3">
                                <h1>Booking</h1>
                                <p className="date">{moment().format('dddd, MMMM Do YYYY')}</p>
                            </Col>
                        </Row>

                        <Row md="9">
                            <Col>
                                <Row>
                                    <Col md="6">
                                        <h3>{trip.title}</h3>
                                        <p className="greyThin">{country.name}</p>
                                    </Col>
                                    <Col>
                                        <p className="blackThin">Date Trip</p>
                                        <p className="greyThin">{moment(trip.dateTrip).format('dddd, MMMM Do YYYY')}</p>
                                    </Col>
                                    <Col>
                                        <p className="blackThin">Duration</p>
                                        <p className="greyThin">{trip.day} Day {trip.night} Night</p>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md="6">

                                        <p className={transaction.status == "Pending" ? "pending" :
                                            transaction.status == "Approve" ? "approve" : "cancel"}>{transaction.status}</p>

                                    </Col>
                                    <Col>
                                        <p className="blackThin">Accomodation</p>
                                        <p className="greyThin">{trip.accomodation}</p>
                                    </Col>
                                    <Col>
                                        <p className="blackThin">Transportation</p>
                                        <p className="greyThin">{trip.transportation}</p>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md="3">
                                <img src={struct} alt="" className="barcode" />
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
                                    <td>{user.fullName}</td>
                                    <td>Male</td>
                                    <td>{user.phone}</td>
                                    <td id="qtyTotal">Qty</td>
                                    <td id="qtyTotal">:&nbsp; &nbsp; {transaction.counterQty} </td>
                                </tr>

                                <tr style={{ border: "none" }}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td id="qtyTotal">Total</td>
                                    <td id="redPrice">:&nbsp; &nbsp; IDR. {transaction.total}</td>
                                </tr>
                            </table>
                        </Row>
                        <Row ><Col style={{ padding: "2%", width: "500px" }}>
                            <div style={{ float: "right" }}>
                                <button className="btnCancel" onDoubleClick={cancel}>Cancel</button>
                                <button style={{ display: transaction.status == "Approve" ? "none" : "inline-block" }} className="btnApprove" onDoubleClick={approve}>Approve</button>
                            </div>
                        </Col></Row>
                    </Container>
                    <Modal show={show} onHide={handleClose} onClick={handleClose}>
                        <Modal.Body>Transaction Id {transaction.id} Approved!!</Modal.Body>
                    </Modal>
                    <Modal show={showCancel} onHide={handleClose} onClick={handleClose}>
                        <Modal.Body>Transaction Id {transaction.id} Canceled!!</Modal.Body>
                    </Modal>
                </div>

            }

        </div >
    )
}

export default Approvment