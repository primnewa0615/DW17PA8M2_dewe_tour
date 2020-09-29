import React, { useContext } from 'react';
import Header from '../compt/HeaderKecil';
import WPayment from '../compt/WPayment';
import Footer from '../compt/Footer';
import { UserContext } from '../context/UserContext';

function WaitingPayment() {
    const { user, setEmailState, upload, setUpload } = useContext(UserContext);
    return (
        <div>
            <Header user={user} setEmailState={setEmailState} />
            <WPayment user={user} upload={upload} setUpload={setUpload} />
            <Footer />
        </div>
    )
}

export default WaitingPayment
