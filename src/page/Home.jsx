import React, { useState, useEffect, useContext } from 'react';
import HeaderBig from '../compt/HeaderBig';
import Card from '../compt/Card';
import Footer from '../compt/Footer';
import Destination from '../compt/Destination';
import HeaderKecil from '../compt/HeaderKecil';
import axios from 'axios';
import { UserContext } from '../context/UserContext';


function Home() {
    const login = localStorage.getItem("token");
    const { user, setEmailState, trip, setTrip } = useContext(UserContext);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get(`https://dewetour.herokuapp.com/api/v1/trip/${search}`).then(res => setTrip(res.data.data))
            .catch(err => console.log(err));
    }, [search]);
    return (

        <div>

            <HeaderBig login={login} user={user} setEmailState={setEmailState} search={search} setSearch={setSearch} />
            <Card />

            <h1 className="wrapUniversal" style={{
                margin: "0",
                padding: "0",
                height: "100px",
                paddingTop: "2%"
            }}>Group Tour</h1>

            <Destination trip={trip} />
            <Footer />
        </div>
    );
}

export default Home;
