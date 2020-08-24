import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Destinations } from '../dumyData/ListDestination';
import "../asset/style.css";
import hotel from '../asset/img/hotel.png';
import plane from '../asset/img/plane.png';
import eat from '../asset/img/eat.png';
import clock from '../asset/img/clock.png';
import date from '../asset/img/date.png';


function DetailDestinatios({ match }) {
    const { id } = useParams();
    const [count, setCount] = useState(0);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTU5Nzk3Njg1Mn0.ezcvLox-VbdJO5n4W2jAT1wTqGr_hbavd4oLVaHpvs4';
    const getTrip = async () => {
        const response = await fetch('http://localhost:5001/api/v1/trip', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.json();
    }

    const { isLoading, isError, data, error } = useQuery(
        "todos",
        getTrip
    );
    if (error) return "An error has occurred: " + error.message;


    const minCount = () => {
        if (count <= 0) {
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }

    const plusCount = () => {
        setCount(count + 1);
    }

    return (
        <div className="wrapUniversal">

            {isLoading ? (<h1>loading</h1>) :
                data.data.filter(detail => detail.id == id).map(trip =>
                    (<Container className="containerDetail">
                        <Row>
                            <Col>
                                <h1>{trip.tittle}</h1>
                                <p className="country">{trip.country.name}</p>
                            </Col>
                        </Row>
                        <Row><Col >
                            <img src={`http://localhost:5001/img/${trip.image}`} alt="" className="mainImage" />
                        </Col></Row>
                        <Col>
                            <Row>
                                <img src={`http://localhost:5001/img/${trip.image}`} alt="" className="childImage" />
                                <img src={`http://localhost:5001/img/${trip.image}`} alt="" className="childImage" style={{ margin: "0 5px" }} />
                                <img src={`http://localhost:5001/img/${trip.image}`} alt="" className="childImage" />
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
                                            <span>{trip.accomadation}</span>
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
                                    <Row>
                                        <Col><img src={eat} alt="" />
                                            <span>  {trip.eat}</span>
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
                                        <Col><img src={clock} alt="" />
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
                                            <span>  {trip.dateTrip.split('T')[0]}</span>
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
                            <Col><p className="yellowPrice">IDR. {trip.price} <span> / Person</span></p></Col>
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
                            <Col><p className="yellowPrice" id="right">IDR. {count * trip.price}</p></Col>
                        </Row>
                        <Row><Col ><button className="btnBook" id="right"> Book Now</button></Col></Row>
                    </Container>)
                )
            }



            {/*  */}
        </div>
    )
}

export default DetailDestinatios
