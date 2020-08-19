import React from 'react';
import HeaderBig from '../compt/HeaderBig';
import Card from '../compt/Card';
import Footer from '../compt/Footer';
import Destination from '../compt/Destination';



function Home() {
    return (
        <div>
            <HeaderBig />
            <Card />
            <h1 className="wrapUniversal" style={{
                margin: "0",
                padding: "0",
                height: "100px",
                paddingTop: "5%"
            }}>Group Tour</h1>

            <Destination />
            <Footer />
        </div>
    );
}

export default Home;
