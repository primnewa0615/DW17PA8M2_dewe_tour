import React from 'react'
import Cards from '../dumyData/ListCard';
import { Container, Row, Col } from 'react-bootstrap';
import bunga from '../asset/img/bunga.png';

function Card() {
    const listCard = Cards.map((card) =>
        <Col>
            <div className="containerCard">
                <img src={card.icon} alt="" />
                <h1>{card.tittle}</h1>
                <h2>{card.detail}</h2>
            </div>
        </Col>
    );
    return (
        <div className="wrapCard">
            <Container>
                <Row>
                    <img className="ornamentBunga" src={bunga} alt="" />
                    {listCard}

                </Row>
            </Container>
        </div>
    )
}

export default Card;
