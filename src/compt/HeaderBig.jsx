import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../asset/style.css";
import logo from '../asset/img/logo.png';
import avatar from '../asset/img/avatar.png';
import Login from '../compt/Login';
import Register from '../compt/Register';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import u from '../asset/img/u.png';
import bill from '../asset/img/bill.png';
import l from '../asset/img/l.png';

function HeaderBig({ user, setEmailState, search, setSearch }) {

    const [toogle, setToogle] = useState("none");
    const [count, setCount] = useState(0);
    const [display, setDisplay] = useState("none");
    function showModal() {
        setDisplay("block")
    }
    function hideModal() {
        setDisplay("none")
    }

    const [displayR, setDisplayR] = useState("none");
    function showModalR() {
        setDisplayR("block")
    }
    function hideModalR() {
        setDisplayR("none")
    }
    const showToogle = (c) => {

        if ((c % 2 == 0)) {
            setToogle("block");
            setCount(count + 1);
        } else {
            setToogle("none");
            setCount(count + 1);
        }
    }

    const logout = (e) => {
        e.preventDefault();

        localStorage.clear();

        setEmailState("");
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);

        console.log(search);
    }

    return (
        <div className="wrapHead">

            <div className="jumboTron">

                <Container>
                    <Row>
                        <Col><img src={logo} alt="" /></Col>
                        {user ?

                            <div className="avatar" onClick={() => showToogle(count)}><img className="avatarImg" src={`http://localhost:5001/${user.img}`} alt="" /></div>

                            :

                            <Col>
                                <button className="btnRegis" onClick={showModalR}>Register</button>
                                <button className="btnLogin" onClick={showModal} >Login</button>
                            </Col>
                        }
                    </Row>
                    <Row>  <div className="toogle" style={{ display: toogle }}>
                        <table>
                            <Link to="/profile">
                                <tr>
                                    <td className="icon"><img src={u} alt="" /></td>
                                    <p>Profile</p>
                                </tr>
                            </Link>
                            <Link to="/waitingPayment">
                                <tr>
                                    <td className="icon"><img src={bill} alt="" /></td>
                                    <p>Pay</p>
                                </tr>
                            </Link>

                            <Link>
                                <tr className="logout" onClick={e => { showToogle(count); logout(e); }}>
                                    <td className="icon"><img src={l} alt="" /></td>
                                    <p >Logout</p>
                                </tr>
                            </Link>
                        </table>
                    </div></Row>
                    <Row><Col><h1>Explore</h1></Col></Row>
                    <Row><Col><h2>Your Amazing City Together</h2></Col></Row>
                    <Row><Col><p>Find great places to holliday</p></Col></Row>
                    <Row><Col><input type="text" className="search" name="search" value={search}
                        onChange={e => handleSearch(e)} />
                        <button className="btnSearch">Search</button></Col></Row>
                </Container>

            </div>
            <div className="wrapModal" style={{ display: display }}>
                <p className="close" onClick={hideModal} >X</p>
                <Login setDisplay={setDisplay} setEmailState={setEmailState} />
            </div>
            <div className="wrapModalR" style={{ display: displayR }}>
                <p className="close" onClick={hideModalR} >X</p>
                <Register setDisplay={setDisplay} />
            </div>

        </div >
    )
}

export default HeaderBig
