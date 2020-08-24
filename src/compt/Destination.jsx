import React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from "react-query-devtools";
import { Container, Row, Col } from 'react-bootstrap';
import { Destinations } from '../dumyData/ListDestination';
import { Link } from 'react-router-dom';
import "../asset/style.css";

function Destination() {
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
        "trips",
        getTrip
    );



    if (error) return "An error has occurred: " + error.message;


    return (
        <div>
            {isLoading ? (<h1> Loading</h1>) : (

                <div className="wrapUniversal">

                    {data.data.map(trip => (
                        <Link to={`/detail/${trip.id}`}>
                            <div className="containerDestination" >
                                <Container >
                                    <Row><Col><img src={`http://localhost:5001/img/${trip.image}`} alt="" /></Col></Row>
                                    <Row><Col><h1>{trip.tittle}</h1></Col></Row>
                                    <Row>
                                        <Col><p className="price">IDR. {trip.price}</p></Col>
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
