import React from 'react';
import '../asset/style.css';
import cari from '../asset/img/cari.png';

function LTransaction() {
    return (
        <div className="wrapUniversal">
            <h1 style={{ fontSize: "36px", position: "absolute", left: "120px", top: "90px" }}>Incoming Transaction</h1>
            <div className="containerListPayment">

                <table>
                    <tr className="whiteRow">
                        <th>No</th>
                        <th>User</th>
                        <th>Trip</th>
                        <th>Bukti Transfer</th>
                        <th>Stattus Payment</th>
                        <th>Action</th>
                    </tr>
                    <tr className="greyRow">
                        <td>1</td>
                        <td>Asep Hermawan</td>
                        <td>5D/4N Magic Tokyo Fun</td>
                        <td>bca.jpg</td>
                        <td className="pending">Pending</td>
                        <td><img src={cari} alt="" /></td>
                    </tr>
                    <tr className="whiteRow">
                        <td>2</td>
                        <td>Oka Manggala</td>
                        <td>4D/3N Labuan Bajo Delight</td>
                        <td>bri.jpg</td>
                        <td className="approve">Approve</td>
                        <td><img src={cari} alt="" /></td>
                    </tr>
                    <tr className="greyRow">
                        <td>3</td>
                        <td>Yogi Hamzali</td>
                        <td>4D/3N Overland Jakarta B...</td>
                        <td>mandiri.jpg</td>
                        <td className="cancel">Cancel</td>
                        <td><img src={cari} alt="" /></td>
                    </tr>
                    <tr className="whiteRow">
                        <td>4</td>
                        <td>Isti Yuli</td>
                        <td>8D/6N Wonderful Autum ...</td>
                        <td>bca.jpg</td>
                        <td className="cancel">Cancel</td>
                        <td><img src={cari} alt="" /></td>
                    </tr>
                    <tr className="greyRow">
                        <td>5</td>
                        <td>Rama Panji</td>
                        <td>6D/4N Exciting Summer in ...</td>
                        <td>bri.jpg</td>
                        <td className="pending">Pending</td>
                        <td><img src={cari} alt="" /></td>
                    </tr>
                    <tr className="whiteRow">
                        <td>6</td>
                        <td>Adit Putra</td>
                        <td>4D/3N Overland Jakarta B...</td>
                        <td>bri.jpg</td>
                        <td className="approve">Approve</td>
                        <td><img src={cari} alt="" /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default LTransaction
