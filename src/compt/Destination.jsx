import React, { useState, useEffect } from 'react';
import { ReactQueryDevtools } from "react-query-devtools";
import { Container, Row, Col } from 'react-bootstrap';
import { Destinations } from '../dumyData/ListDestination';
import { Link } from 'react-router-dom';
import "../asset/style.css";
import axios from 'axios'

function Destination({ trip }) {
    const email = localStorage.getItem("email");
    const [counterQty, setCounterQty] = useState(0);
    const [loading, setLoading] = useState(false);

    return (
        <div>
            {loading ? (<h1> Loading</h1>) : (

                <div className="wrapUniversal">


                    {trip.map(trip => (

                        <Link to={`/detail/${trip.id}`}>
                            <div className="containerDestination"  >
                                <Container >
                                    <Row><Col><img src={`http://localhost:5001/${trip.image1}`} alt="" />
                                        <p style={{
                                            position: "absolute",
                                            width: "52px",
                                            height: "29px",
                                            backgroundColor: "white",
                                            fontSize: "14px",
                                            zIndex: "1",
                                            top: "30px",
                                            right: "20px",
                                            padding: "1%"
                                        }}>{trip.totalCounterQty == null ? 0 : trip.totalCounterQty} / {trip.quota} </p>
                                    </Col></Row>
                                    <Row><Col><h1 style={{
                                        width: "300px",
                                        height: "30px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        wordWrap: "break-word"
                                    }}>{trip.title}</h1></Col></Row>
                                    <Row>
                                        <Col><p className="price">IDR. {new Intl.NumberFormat().format(trip.price)} </p></Col>
                                        <Col><p className="country">{trip.country.name}</p></Col>
                                    </Row>
                                </Container>

                            </div>
                        </Link>
                    )
                    )
                    }
                </div>
            )
            }
        </div>
    )
}


export default Destination;
