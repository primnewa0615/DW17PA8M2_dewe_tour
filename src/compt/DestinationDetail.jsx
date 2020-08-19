import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Destinations } from '../dumyData/ListDestination';
import "../asset/style.css";
import hotel from '../asset/img/hotel.png';
import plane from '../asset/img/plane.png';
import eat from '../asset/img/eat.png';
import clock from '../asset/img/clock.png';
import date from '../asset/img/date.png';


function DetailDestinatios({ match }) {
    const { id } = useParams();
    const destination = Destinations.filter(detail => {
        return detail.id == id;
    });
    const [count, setCount] = useState(0);

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
    console.log(destination);
    return (
        <div className="wrapUniversal">
            <Container className="containerDetail">
                <Row>
                    <Col>
                        <h1>{destination[0].tittle}</h1>
                        <p className="country">{destination[0].country}</p>
                    </Col>
                </Row>
                <Row><Col ><img src={destination[0].img} alt="" className="mainImage" /></Col></Row>
                <Row>
                    <Col>
                        <img src={destination[0].img1} alt="" className="childImage" />
                        <img src={destination[0].img2} alt="" className="childImage" style={{ margin: "0 5px" }} />
                        <img src={destination[0].img3} alt="" className="childImage" />
                    </Col>
                </Row>
                <Row><Col><p className="infoTrip">Information Trip</p></Col></Row>
                <Row>
                    <Col>
                        <div className="detailTour">
                            <Row>
                                <Col><p className="category">Accomodation</p></Col>
                            </Row>
                            <Row>
                                <Col ><img src={hotel} alt="" />
                                    <span>  Hotel {destination[0].hotel} Nights</span>
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
                                    <span>  {destination[0].plane}</span>
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
                                    <span>  {destination[0].eat}</span>
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
                                    <span>  {destination[0].duration}</span>
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
                                    <span>  {destination[0].date}</span>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: "35px" }}>
                    <Col>
                        <span className="deskripsi">
                            <p>Description</p>
                            {destination[0].description}
                        </span>
                    </Col>
                </Row>
                <Row className="bottomRow">
                    <Col><p className="yellowPrice">IDR. {destination[0].price} <span> / Person</span></p></Col>
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
                    <Col><p className="yellowPrice" id="right">IDR. {count * destination[0].price}</p></Col>
                </Row>
                <Row><Col ><button className="btnBook" id="right"> Book Now</button></Col></Row>
            </Container>
        </div>
    )
}

export default DetailDestinatios
