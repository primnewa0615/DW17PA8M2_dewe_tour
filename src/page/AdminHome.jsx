import React, { useContext } from 'react';
import Header from '../compt/HeaderAdmin';
import Trip from '../compt/Destination';
import Footer from '../compt/Footer';
import { Link } from 'react-router-dom';
import '../asset/style.css';
import { UserContext } from '../context/UserContext';

function AdminHome() {
    const { user, setEmailState, trip, total, setTotal } = useContext(UserContext);
    return (
        <>
            <Header user={user} setEmailState={setEmailState} />
            <div
                style={{
                    backgroundColor: "#E5E5E5",
                    margin: "0",
                    padding: "5% 10% 0 10% ",
                    height: "100px"
                }}
            >
                <span style={{
                    width: "200px",
                    fontSize: "40px",
                    lineHeight: "10px",
                    fontFamily: "avenir",
                    fontWeight: "bolder"
                }}>Income Trip</span>
                <Link to="/addTrip"><button className="btnRegis" style={{ margin: "0" }}>Add Trip</button></Link>
            </div>
            <Trip trip={trip} total={total} setTotal={setTotal} />
            <Footer />
        </>
    )
}

export default AdminHome
