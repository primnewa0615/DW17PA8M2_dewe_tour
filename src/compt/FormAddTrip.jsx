import React, { useState } from 'react';
import axios from 'axios';
import '../asset/style.css';
import { Container, Row, Col } from 'react-bootstrap';


function FormAddTrip() {
    const [inputValue, setInputValue] = useState({
        title: "",
        idCountry: "",
        accomodation: "",
        transportation: "",
        eat: "",
        day: 0,
        night: 0,
        dateTrip: "",
        price: 0,
        quota: 0,
        description: ""
    });

    const [inputFile, setInputFile] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setInputValue({
            ...inputValue,
            [e.target.name]: value
        })
    }

    const handleFile = (e) => {
        e.preventDefault();
        setInputFile(e.target.files[0]);

    }


    const addTrip = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token")
        axios.post("https://dewetour.herokuapp.com/api/v1/trip", { ...inputValue }, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                const trip = res.data.data;
                const fd = new FormData();
                fd.append("image1", inputFile);
                console.log(fd);
                axios.patch("https://dewetour.herokuapp.com/api/v1/imageForm", fd, {
                    params: {
                        id: trip.id
                    },
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }).then(res => console.log("image trip berhasil ditambahkan")).catch(err => console.log(err))
            }).catch(err => console.log(err));
    }

    return (
        <div className="wrapUniversal">
            <div className="containerAddTrip">
                <form action="" onSubmit={e => addTrip(e)} id="addTrip">
                    <Container >
                        <h1>Add Trip</h1>
                        <Row>
                            <Col>
                                <label htmlFor="title">Title Trip</label> <br />
                                <input type="text"
                                    className="inputTrip"
                                    name="title"
                                    value={inputValue.title}
                                    onChange={e => handleChange(e)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="idCountry">Country</label> <br />
                                <select
                                    className="inputTrip"
                                    name="idCountry"
                                    onChange={e => handleChange(e)}
                                    value={inputValue.idCountry}
                                >
                                    <option value="1">Indonesia</option>
                                    <option value="2">Turkey</option>
                                    <option value="3">Japan</option>
                                    <option value="4">Australia</option>
                                    <option value="5">South Korea</option>
                                </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="accomodation">Accomodation</label> <br />
                                <input type="text"
                                    className="inputTrip"
                                    name="accomodation"
                                    value={inputValue.accomodation}
                                    onChange={e => handleChange(e)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="transportation">Transportation</label> <br />
                                <input type="text"
                                    className="inputTrip"
                                    name="transportation"
                                    value={inputValue.transportation}
                                    onChange={e => handleChange(e)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="eat">Eat</label> <br />
                                <input type="text"
                                    className="inputTrip"
                                    name="eat"
                                    value={inputValue.eat}
                                    onChange={e => handleChange(e)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>Duration</label> <br />
                                <input type="number"
                                    className="inputTripK"
                                    name="day"
                                    value={inputValue.day}
                                    onChange={e => handleChange(e)}
                                />&nbsp;&nbsp;&nbsp;
                                <label htmlFor="day">Day</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="number"
                                    className="inputTripK"
                                    name="night"
                                    value={inputValue.night}
                                    onChange={e => handleChange(e)}
                                />&nbsp;
                                <label htmlFor="night">Night</label> &nbsp;&nbsp;&nbsp;&nbsp;
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="date">Date Trip</label> <br />
                                <input type="date"
                                    className="inputTrip"
                                    name="dateTrip"
                                    value={inputValue.date}
                                    onChange={e => handleChange(e)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="price">Price Trip</label> <br />
                                <input type="number"
                                    className="inputTrip"
                                    name="price"
                                    value={inputValue.price}
                                    onChange={e => handleChange(e)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="quota">Quota</label> <br />
                                <input type="number"
                                    className="inputTrip"
                                    name="quota"
                                    value={inputValue.quota}
                                    onChange={e => handleChange(e)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="description">Description</label> <br />
                                <textarea
                                    className="TextareaTrip"
                                    name="description"
                                    value={inputValue.description}
                                    onChange={e => handleChange(e)}

                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label >Image</label> <br />
                                <label className="attache" htmlFor="image1">Attache Image</label>
                                <input
                                    id="image1"
                                    type="file"
                                    style={{ display: "none" }}
                                    name="image1"
                                    value={inputValue.image1}
                                    onChange={e => handleFile(e)}
                                    multiple
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <button onClick={(e) => addTrip(e)}>Add Trip</button>
                            </Col>
                        </Row>
                    </Container>
                </form>
            </div>
        </div>
    )
}

export default FormAddTrip
