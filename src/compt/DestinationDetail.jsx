import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Modal,
    Button
} from 'react-bootstrap';
import "../asset/style.css";
import hotel from '../asset/img/hotel.png';
import plane from '../asset/img/plane.png';
import eat from '../asset/img/eat.png';
import clock from '../asset/img/clock.png';
import date from '../asset/img/date.png';
import axios from 'axios';
import { useEffect } from 'react';
import moment from 'moment';


function DetailDestinatios({ user }) {
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const [showErr, setShowErr] = useState(false);
    const [total, setTotal] = useState([]);
    const [trip, setTrip] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [country, setCountry] = useState(0);
    const token = localStorage.getItem("token");

    moment.locale();

    const handleShow = () => setShow(true);
    const handleClose = () => { setShow(false); setShowErr(false) };

    useEffect(() => {
        // axios.get(`https://dewetour.herokuapp.com/api/v1/user/${email}`)
        //     .then(res => setUser(res.data.data.user)).catch(err => console.log(err))
        setLoading(true);
        axios.get(`https://dewetour.herokuapp.com/api/v1/trips/${id}`, {

            params: {
                id: id
            }
        }).then(res => { setTrip(res.data.data); setCountry(res.data.data.country); setLoading(false) }).catch(err => console.log(err));
    }, [])



    const minCount = () => {
        if (count <= 0) {
            setCount(0);
        } else {
            setCount(count - 1);
            setTotal((count - 1) * trip.price)
        }
    }

    const plusCount = () => {
        setCount(count + 1);
        setTotal((count + 1) * trip.price)
    }

    const handleBook = () => {

        axios.post("https://dewetour.herokuapp.com/api/v1/transaction", {
            counterQty: count,
            total: total,
            status: "Waiting Payment",
            idTrip: id,
            idUser: user.id
        }, { headers: { 'Authorization': `Bearer ${token}` } })
    }

    const handleChange = (e) => {
        e.preventDefault();
        setTotal(e.target.value)
    }

    const handleBeforeShow = () => {
        if ((count || total) == 0) {
            setShowErr(true);
        } else {
            setShow(true);
            handleBook();
        }
    }

    return (
        <div className="wrapUniversal">

            {loading ? (<h1>loading</h1>) :

                (<Container className="containerDetail">
                    <Row>
                        <Col>
                            <h1>{trip.title}</h1>
                            <p className="country">{country.name}</p>
                        </Col>
                    </Row>
                    <Row><Col >
                        <img src={`https://dewetour.herokuapp.com/${trip.image1}`} alt="" className="mainImage" />
                    </Col></Row>
                    <Col>
                        <Row>
                            <img src={`https://dewetour.herokuapp.com/${trip.image1}`} alt="" className="childImage" />
                            <img src={`https://dewetour.herokuapp.com/${trip.image1}`} alt="" className="childImage" style={{ margin: "0 5px" }} />
                            <img src={`https://dewetour.herokuapp.com/${trip.image1}`} alt="" className="childImage" />
                        </Row>
                    </Col>

                    <Row><Col><p className="infoTrip">Information Trip</p></Col></Row>
                    <Row>
                        <Col>
                            <div className="detailTour">
                                <Row>
                                    <Col><p className="category">Accomodation</p></Col>
                                </Row>
                                <Row>
                                    <Col ><img src={hotel} alt="" />
                                        <span>{trip.accomodation}</span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col>
                            <div className="detailTour">
                                <Row>
                                    <Col><p className="category">Transportation</p></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src={plane} alt="" />
                                        <span>  {trip.transportation}</span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>


                        <Col>
                            <div className="detailTour">
                                <Row>
                                    <Col><p className="category">Eat</p></Col>
                                </Row>
                                <Row >
                                    <Col ><img src={eat} alt="" />&nbsp;
                                        <span className="eatText"> {trip.eat}</span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="detailTour">
                                <Row>
                                    <Col><p className="category">Duration</p></Col>
                                </Row>
                                <Row>
                                    <Col ><img src={clock} alt="" />
                                        <span>  {trip.day} Day {trip.night} Nights</span>
                                    </ Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="detailTour">
                                <Row>
                                    <Col><p className="category">Date Trip</p></Col>
                                </Row>
                                <Row>
                                    <Col><img src={date} alt="" />
                                        <span>  {moment(trip.dateTrip).format('LL')}</span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "35px" }}>
                        <Col>
                            <span className="deskripsi">
                                <p>Description</p>
                                {trip.description}
                            </span>
                        </Col>
                    </Row>
                    <Row className="bottomRow">
                        <Col><p className="yellowPrice">IDR. {new Intl.NumberFormat().format(trip.price)} <span> / Person</span></p></Col>
                        <Col>
                            <div id="right">
                                <button className="plusMin" onClick={minCount}>-</button>
                            &nbsp;<span>{count}</span>&nbsp;
                            <button className="plusMin" onClick={plusCount} >+</button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="bottomRow">
                        <Col><p className="total">Total :</p></Col>
                        <Col><p className="yellowPrice" id="right" >IDR. {new Intl.NumberFormat().format(total)}</p></Col>
                    </Row>
                    <Row><Col >{trip.totalCounterQty == trip.quota ? (<button className="btnBook" id="right" > This Tour has Full</button>) : (
                        <button className="btnBook" id="right" onClick={handleBeforeShow}> Book Now</button>
                    )}

                    </Col></Row>
                </Container>)


            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{trip.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Pemesanan tiket perjalanan untuk {count} orang, berhasil diBooking. selanjutnya silahkan lakukan pembayaran. Trimakasih..</Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>
                        Ok
          </Button>
                </Modal.Footer>
            </Modal>

            {/* //if Total 0 */}

            <Modal show={showErr} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{trip.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Maaf, minimal pemesanan 1 tiket</Modal.Body>
                <Modal.Footer>

                    <Button variant="danger" onClick={handleClose}>
                        ok
          </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default DetailDestinatios
