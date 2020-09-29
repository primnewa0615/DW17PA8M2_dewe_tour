import React, { useState, useEffect, useContext } from 'react';
import Header from '../compt/HeaderKecil';
import Profile from '../compt/Profile';
import Axios from 'axios';

import Footer from '../compt/Footer';
import { UserContext } from '../context/UserContext';

function PageProfile() {
    // const [user, setUser] = useState([]);
    const { user, setEmailState, emailState, setUser, setUpload, upload } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    // const [email, setEmail] = useState(localStorage.getItem("email"));




    // useEffect(() => {
    //     Axios.get(`http://localhost:5001/api/v1/user/${email}`).then(res => {
    //         const user = res.data.data.user;
    //         console.log(user);
    //         setUser(user);

    //     }).catch(err => console.log(err));
    // }, []);

    return (
        <div>
            <Header user={user} setLoading={setLoading} setEmailState={setEmailState} />
            <Profile user={user} upload={upload} setUpload={setUpload} loading={loading} setLoading={setLoading}
                setEmailState={setEmailState} emailState={emailState} setUser={setUser}
            />

            <Footer />
        </div>
    )
}

export default PageProfile;
