import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import '../asset/style.css';
import struct from '../asset/img/uploadStruct.png';
import logo from '../asset/img/logo.png';
import axios from 'axios';
import Approvment from './Approvment';
import moment from 'moment';

function WPayment({ user, upload, setUpload }) {
    const token = localStorage.getItem('token');
    const [transaction, setTransaction] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalApprov, setModalApprove] = useState("none");
    const [show, setShow] = useState(false);
    const [gagalUpload, setgagalUpload] = useState(false);

    const uploadPhoto = (e, idTransaction) => {
        e.preventDefault();
        setUpload(true);
        const formData = new FormData();
        formData.append('fileImage', e.target.files[0]);

        axios.patch("https://dewetour.herokuapp.com/api/v1/uploadImgStruct", formData, {
            params: {
                id: idTransaction
            },
            headers: {
                'content-type': 'multipart/form-data'
            }

        }).then(res => {
            setTransaction(res.data.data); setUpload(false);
        }).catch(err => console.log(err))
    }

    const handleClose = () => {
        setShow(false);
        setgagalUpload(false);
    };
    useEffect(() => {
        setLoading(true);
        axios.get(`https://dewetour.herokuapp.com/api/v1/transaction/${user.id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => {
            const transaction = res.data.data;
            console.log("mantap");
            setTransaction(transaction);

            setLoading(false);

        }).catch(err => console.log(err))

    }, [user || transaction]);

    const handlePay = (e, id, struct) => {
        e.preventDefault();
        if (struct) {
            axios.patch(`https://dewetour.herokuapp.com/api/v1/transaction/${id}`, { status: "Pending" }, {
                headers: { 'Authorization': `Bearer ${token}` }
            }
            )
            setShow(true);
            axios.get(`https://dewetour.herokuapp.com/api/v1/transaction/${user.id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            }).then(res => {
                const transaction = res.data.data;
                console.log("mantap");
                setTransaction(transaction);

                setLoading(false);

            }).catch(err => console.log(err))

        } else {
            setgagalUpload(true);
        }

    }
    return (
        <div className="wrapUniversal" style={{ position: "relative" }}>
            {loading ? (<p> loading...</p>) :

                !(transaction.filter(tr => tr.status == "Waiting Payment")) ? <div ><p style={{ height: "50vh", paddingTop: "15vh" }}>Tidak ada Tour yang sudah di Booking..</p></div> : transaction.filter(tr => tr.status == "Waiting Payment").map(t => (
                    <div style={{ marginBottom: "3%" }}>

                        <div className="containerHistoryTrip">

                            <Container>
                                <Row md="9">
                                    <Col md="9"><img src={logo} alt="" className="logo" /></Col>
                                    <Col md="3">
                                        <h1>Booking</h1>
                                        <p className="date">{moment().format('LL')}</p>
                                    </Col>
                                </Row>

                                <Row md="9">
                                    <Col>
                                        <Row>
                                            <Col md="6">
                                                <h3> {t.trip.title} </h3>
                                                <p className="greyThin">{t.trip.country.name}</p>
                                            </Col>
                                            <Col>
                                                <p className="blackThin">Date Trip</p>
                                                <p className="greyThin">{moment(t.trip.dateTrip).format('dddd MMMM Do YYYY')}</p>
                                            </Col>
                                            <Col>
                                                <p className="blackThin">Duration</p>
                                                <p className="greyThin">{t.trip.day} Day {t.trip.night} Night</p>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col md="6">
                                                {(t.status === "Waiting Payment") ?
                                                    <p className="statusWpayment">{t.status}</p> : <p className="statusApprove">{t.status}</p>
                                                }

                                            </Col>
                                            <Col>
                                                <p className="blackThin">Accomodation</p>
                                                <p className="greyThin">{t.trip.accomodation}</p>
                                            </Col>
                                            <Col>
                                                <p className="blackThin">Transportation</p>
                                                <p className="greyThin">{t.trip.transportation}</p>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md="3">
                                        <img style={{ width: "160px", height: "170px", marginLeft: "50px" }} src={!t.struct ? struct : `https://dewetour.herokuapp.com/${t.struct}`} alt="" /><br />
                                        <label htmlFor="upload" className="uploadStruct">Upload Struct</label>
                                        <input style={{ display: "none" }} type="file" id="upload" onChange={e => uploadPhoto(e, t.id)} />

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
                                            <td id="qtyTotal">:&nbsp; &nbsp;  {t.counterQty}</td>
                                        </tr>

                                        <tr style={{ border: "none" }}>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td id="qtyTotal">Total</td>
                                            <td id="redPrice">:&nbsp; &nbsp; IDR. {new Intl.NumberFormat().format(t.total)}</td>
                                        </tr>
                                    </table>
                                </Row>
                            </Container>
                        </div>
                        <button className="btnChangePhoto" onClick={e => handlePay(e, t.id, t.struct)} style={{ float: "right", marginRight: "10%" }}>PAY</button>
                    </div>
                ))

            }
            <Modal show={show} onHide={handleClose} onClick={handleClose}>
                <Modal.Body>Pembayaran berhasil</Modal.Body>
            </Modal>
            <Modal show={gagalUpload} onHide={handleClose} onClick={handleClose}>
                <Modal.Body>Pembayaran Gagal, silahkan upload bukti pembayaran</Modal.Body>
            </Modal>
            <Approvment display={modalApprov} />
        </div>
    )
}

export default WPayment
