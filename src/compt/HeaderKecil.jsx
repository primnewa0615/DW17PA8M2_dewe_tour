import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../asset/style.css";
import logo from '../asset/img/logo.png';
import Axios from 'axios';
import Login from '../compt/Login';
import Register from '../compt/Register';
import u from '../asset/img/u.png';
import bill from '../asset/img/bill.png';
import l from '../asset/img/l.png';


function HeaderKecil({ user, setEmailState, setLoading }) {
    // const [user, setUser] = useState([]);
    const [toogle, setToogle] = useState("none");
    const [count, setCount] = useState(0);
    // const [loading, setLoading] = useState(false);
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

    }
    return (
        <div className="headerKecil">
            <div className="containerHederKecil">
                <Container>
                    <Row>
                        <Col><Link to="/"> <img src={logo} alt="" /></Link></Col>
                        {!user ?
                            <Col>
                                <button className="btnRegis" onClick={showModalR}>Register</button>
                                <button className="btnLogin" onClick={showModal}>Login</button>
                            </Col> :
                            <div className="avatar" onClick={() => showToogle(count)}><img className="avatarImg" src={`https://dewetour.herokuapp.com/${user.img}`} alt="" /></div>}
                    </Row>
                </Container>
                <div className="wrapModal" style={{ display: display }}>
                    <p className="close" onClick={hideModal} >X</p>
                    <Login setDisplay={setDisplay} setEmailState={setEmailState} />
                </div>
                <div className="wrapModalR" style={{ display: displayR }}>
                    <p className="close" onClick={hideModalR} >X</p>
                    <Register setDisplay={setDisplay} />
                </div>

                <div className="toogle" style={{ display: toogle }}>
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
                </div>
            </div>
        </div>
    )
}

export default HeaderKecil;
