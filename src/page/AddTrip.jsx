import React, { useContext } from 'react';
import Header from '../compt/HeaderAdmin';
import AddTripp from '../compt/FormAddTrip';
import Footer from '../compt/Footer';
import { UserContext } from '../context/UserContext';

function AddTrip() {
    const { user, setEmailState } = useContext(UserContext);
    return (
        <>
            <Header user={user} setEmailState={setEmailState} />
            <AddTripp />
            <Footer />
        </>
    )
}

export default AddTrip;