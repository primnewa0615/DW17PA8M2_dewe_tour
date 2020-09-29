import React, { useContext } from 'react';
import Header from '../compt/HeaderKecil';
import DestinationDetail from '../compt/DestinationDetail';
import Footer from '../compt/Footer';
import { UserContext } from '../context/UserContext';


function Detail() {
    const { user, setLoading } = useContext(UserContext);
    return (
        <div>
            <Header user={user} setLoading={setLoading} />
            <DestinationDetail user={user} />
            <Footer />
        </div>
    )
}

export default Detail;
