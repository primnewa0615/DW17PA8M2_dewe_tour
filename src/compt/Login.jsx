import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bunga from '../asset/img/bunga1.png';
import palm from '../asset/img/palm.png';
import axios from 'axios';

function Login({ setDisplay, setEmailState }) {
    // const email = localStorage.getItem("email")
    const [errMessege, setErrMessege] = useState();
    const [displayErr, setDisplayErr] = useState("none");
    const [inputValue, setInputValue] = useState(
        {
            email: "",
            password: ""
        });

    function handleInput(evt) {
        evt.preventDefault();
        const value = evt.target.value;
        setInputValue({
            ...inputValue,
            [evt.target.name]: value

        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.clear();
        axios({
            method: "post",
            url: "http://localhost:5001/api/v1/login",
            data: { ...inputValue }
        }).then(res => {
            const user = res.data.data;
            localStorage.setItem("email", user.email);
            localStorage.setItem("token", user.token);
            setEmailState(localStorage.getItem("email"));
            setDisplay("none");

        }).catch(err => setDisplayErr("block"));
    }

    // useEffect(() => {
    //     setLoading(true)
    //     axios.get(`http://localhost:5001/api/v1/user/${email}`).then(res => {
    //         const user = res.data.data.user
    //         setUser(user);
    //         setLoading(false);

    //     }).catch(err => {
    //         setUser(false);
    //         console.log(err);
    //     });
    // }, [email])
    return (
        <div className="containerModal">

            <Row style={{ width: "416px" }}>
                <Col xs="4"><img src={palm} alt="" className="palm" /></Col>
                <Col xs="5"  ><h1>Login</h1></Col>
                <Col xs="3" style={{ position: "relative" }}><img src={bunga} alt="" className="bunga" style={{ position: "absolute", right: "0" }} /></Col>
            </Row>
            <Container>
                <Row style={{ display: displayErr }}><Col><p className="wrongPass">&nbsp;&nbsp; Email / Passsword Salah</p></Col></Row>
                <Row>
                    <Col>
                        <label for="email">Email</label><br />
                        <input id="email" type="email" name="email" value={inputValue.email} onChange={handleInput} /><br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label for="password">Password</label><br />
                        <input id="password" type="password" name="password" value={inputValue.password} onChange={handleInput} /><br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={(e) => handleLogin(e)}>Login</button>
                    </Col>
                </Row>
                <Row><Col><p>Don't have an account? ? Klik Here</p></Col></Row>
            </Container>
        </div>



    )
}



export default Login
