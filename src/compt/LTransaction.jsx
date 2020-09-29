import React, { useEffect, useState } from 'react';
import '../asset/style.css';
import cari from '../asset/img/cari.png';
import axios from 'axios';
import Approvment from './Approvment';


function LTransaction({ total, setTotal }) {
    const token = localStorage.getItem('token');
    const [transaction, setTransaction] = useState([]);
    const [idTransaction, setIdTransaction] = useState(0);
    const [count, setCount] = useState(1);
    const [modalApprov, setModalApprove] = useState("none");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:5001/api/v1/transaction`, {
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => {
            const transaction = res.data.data;
            setTransaction(transaction);
            setLoading(false);
        }).catch(err => console.log(err))
    }, [count]);

    // const settingModal = (id) => {
    //     setModalApprove("block");
    //     setIdTransaction(id);
    // }
    return (
        <div className="wrapUniversal">
            <h1 style={{ fontSize: "36px", position: "absolute", left: "120px", top: "90px" }}>Incoming Transaction</h1>
            <div className="containerListPayment">

                <table>
                    <tr className="whiteRow">
                        <th>Id</th>
                        <th>User</th>
                        <th>Trip</th>
                        <th>Bukti Transfer</th>
                        <th>Stattus Payment</th>
                        <th>Action</th>
                    </tr>
                    {loading ? <p>loading...</p> :
                        transaction.filter(trans => trans.status != "Waiting Payment").map(t =>

                            <tr key={t.id}>
                                <td>{t.id}</td>
                                <td>{t.user.fullName}</td>
                                <td>{t.trip.title}</td>
                                <td>bca.jpg</td>
                                <td className={(t.status == "Pending") ? "pending" :
                                    (t.status == "Approve") ? "approve" : "cancel"}>{t.status}</td>
                                <td onClick={e => { setModalApprove("block"); setIdTransaction(t.id) }}><img src={cari} alt="" /></td>

                            </tr>
                        )
                    }

                </table>
            </div>
            <Approvment display={modalApprov} setDisplay={setModalApprove} idTransaction={idTransaction} count={count} setCount={setCount} total={total} setTotal={setTotal} />
        </div>
    )
}

export default LTransaction
