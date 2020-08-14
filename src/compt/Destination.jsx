import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Destinations from '../dumyData/ListDestination';
import "../asset/style.css";

function Destination() {
    const listDestination = Destinations.map((destination) =>
        <div className="containerDestination">
            <Container>
                <Row><Col><img src={destination.img} alt="" /></Col></Row>
                <Row><Col><h1>{destination.tittle}</h1></Col></Row>
                <Row>
                    <Col><p className="price">IDR. {destination.price}</p></Col>
                    <Col><p className="country">IDR. {destination.country}</p></Col>
                </Row>
            </Container>
        </div>
    )
    return (
        <div className="wrapUniversal">
            {listDestination}
        </div>
    )
}

export default Destination;
