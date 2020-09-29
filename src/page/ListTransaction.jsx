import React, { useContext } from 'react';
import Header from '../compt/HeaderAdmin';
import LTransaction from '../compt/LTransaction';
import Footer from '../compt/Footer';
import { UserContext } from '../context/UserContext';

function ListTransaction() {
    const { user, setEmailState, total, setTotal } = useContext(UserContext);
    return (
        <div>
            <Header user={user} setEmailState={setEmailState} />

            <LTransaction total={total} setTotal={setTotal} />
            <Footer />
        </div>
    )
}

export default ListTransaction
