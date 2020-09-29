import React from 'react';
import Header from '../compt/HeaderKecil';
import Login from '../compt/Login';


function AdminLogin() {
    return (
        <>

            <div style={{
                margin: "0 auto",
                border: "3px solid #FFAF00",
                zIndex: "2",
                marginTop: "50px",
                width: "480px",
                height: "520px",
                backgroundColor: "whitesmoke"
            }}>
                <Login />
            </div>

        </>
    )
}

export default AdminLogin
