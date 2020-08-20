import React from 'react';
import Header from '../compt/HeaderKecil';
import Profile from '../compt/Profile';
import HistoryTrip from '../compt/HistoryTrip';
import Footer from '../compt/Footer';

function PageProfile() {
    return (
        <div>
            <Header />
            <Profile />
            <p style={{
                backgroundColor: "#E5E5E5",
                fontFamily: "Avenir",
                fontSize: "36px",
                fontWeight: "800",
                margin: "0",
                paddingLeft: "180px"
            }}>History Trip</p>
            <HistoryTrip />
            <Footer />
        </div>
    )
}

export default PageProfile;
