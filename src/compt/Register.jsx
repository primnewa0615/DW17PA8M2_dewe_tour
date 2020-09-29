import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bunga from '../asset/img/bunga1.png';
import palm from '../asset/img/palm.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login(props) {
    const [filed, setFiled] = useState("none");
    const [success, setSuccess] = useState("none");
    const [inputValue, setInputValue] = useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",
    });
    const handleInput = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setInputValue({
            ...inputValue,
            [e.target.name]: value
        });
    }

    const handleRegis = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5001/api/v1/register", { ...inputValue })
            .then(res => {
                console.log("berhasil");
                setInputValue({
                    email: "",
                    password: "",
                    fullName: "",
                    phone: "",
                    address: ""
                });
                setFiled("none")
                setSuccess("block");
            }).catch(err => { setSuccess("none"); setFiled("block"); })
    }
    return (
        <div className="containerModalR">

            <Row style={{ width: "416px", marginBottom: "0" }}>
                <Col xs="4"><img src={palm} alt="" className="palm" /></Col>
                <Col xs="5"  ><h1>Register</h1></Col>
                <Col xs="3" style={{ position: "relative" }}><img src={bunga} alt="" className="bunga" style={{ position: "absolute", right: "0" }} /></Col>
            </Row>
            <Container>
                <span style={{ display: filed, color: "red" }}>Registrasi gagal, Email sudah terdaftar</span>
                <span style={{ display: success, color: "blue" }}>Registrasi Berhasil, silahkan Login</span>

                <Row>
                    <Col>
                        <label htmlFor="name">Full Name</label><br />
                        <input
                            id="name"
                            type="text"
                            name="fullName"
                            value={inputValue.fullName}
                            onChange={e => handleInput(e)} />
                        <br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor="email">Email</label><br />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={inputValue.email}
                            onChange={e => handleInput(e)}
                        />
                        <br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor="password">Password</label><br />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={inputValue.password}
                            onChange={e => handleInput(e)}
                        />
                        <br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor="phone">Phone</label><br />
                        <input
                            id="phone"
                            type=" text"
                            name="phone"
                            value={inputValue.phone}
                            onChange={e => handleInput(e)}
                        />
                        <br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor="address">Address</label><br />
                        <input
                            id="address"
                            type="text"
                            name="address"
                            value={inputValue.address}
                            onChange={e => handleInput(e)}
                        />
                        <br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onDoubleClick={e => handleRegis(e)}>Register</button>
                    </Col>
                </Row>

            </Container>
        </div>



    )
}



export default Login
