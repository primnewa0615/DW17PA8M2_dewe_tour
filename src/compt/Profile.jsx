import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../asset/style.css';
import userF from '../asset/img/user.jpg';
import vector from '../asset/img/Vector.png';
import vector1 from '../asset/img/Vector-1.png';
import vector2 from '../asset/img/Vector-2.png';
import vector3 from '../asset/img/Vector-3.png';
import axios from 'axios';
import HistoryTrip from '../compt/HistoryTrip';
import moment from 'moment';
import struct from '../asset/img/struct.png';
import logo from '../asset/img/logo.png';


function Profile({ user, loading, upload, setUpload, emailState, setUser }) {
    const [transaction, setTransaction] = useState([]);
    const token = localStorage.getItem('token');
    const uploadPhoto = (e) => {
        e.preventDefault();
        setUpload(true);
        const formData = new FormData();
        formData.append('fileImage', e.target.files[0]);

        axios.patch("http://localhost:5001/api/v1/uploadImgProfile", formData, {
            params: {
                email: emailState
            },
            headers: {
                'content-type': 'multipart/form-data'
            }

        }).then(res => {
            setUser(res.data.data.user); setUpload(false);
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get(`http://localhost:5001/api/v1/transaction/${user.id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => {
            const transaction = res.data.data;

            setTransaction(transaction);



        }).catch(err => console.log(err))

    }, [user]);

    return (
        <div className="wrapProfile">
            <div className="containerProfile">

                <Container >
                    {loading ? (<p>Loading..</p>) : (
                        <Row>

                            <Col md="7">

                                <Container>
                                    <Row> <Col> <h1>Personal Info</h1></Col> </Row>
                                    <Row className="personalInfo">
                                        <Col xs="0"><img src={vector} alt="" /></Col>
                                        <Col>
                                            <p className="black">{user.fullName}</p>
                                            <p className="grey">Full Name</p>
                                        </Col>
                                    </Row>

                                    <Row className="personalInfo">
                                        <Col xs="0"><img src={vector1} alt="" /></Col>
                                        <Col>
                                            <p className="black">{user.email}</p>
                                            <p className="grey">Email</p>
                                        </Col>
                                    </Row>

                                    <Row className="personalInfo">
                                        <Col xs="0"><img src={vector2} alt="" /></Col>
                                        <Col>
                                            <p className="black">{user.phone}</p>
                                            <p className="grey">Mobile Phone</p>
                                        </Col>
                                    </Row>

                                    <Row className="personalInfo">
                                        <Col xs="0"><img src={vector3} alt="" /></Col>
                                        <Col>
                                            <p className="black">{user.address}</p>
                                            <p className="grey">Address</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col md="5">
                                {upload ? <img src={userF} alt="" /> :
                                    <img className="fotoProfile" src={user.img ? `http://localhost:5001/${user.img}` : userF} alt="" />}
                                <br /><br />
                                <label htmlFor="changePhoto" className="btnChangePhoto" >Change Photo Profile</label>
                                <input
                                    id="changePhoto"
                                    style={{ display: "none" }}
                                    type="file"
                                    name="img"
                                    onChange={e => uploadPhoto(e)} />
                            </Col>
                        </Row>
                    )}
                </Container>

            </div>
            <br />
            <p style={{
                backgroundColor: "#E5E5E5",
                fontFamily: "Avenir",
                fontSize: "36px",
                fontWeight: "800",
                margin: "10% 0 5% 0"

            }}>History Trip</p>
            {transaction.filter(tr => tr.status == "Approve").map(t => (
                <>
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
                    <br /> <br /><br /><br />

                </>

            ))
            }
        </div>



    )

}

export default Profile;
