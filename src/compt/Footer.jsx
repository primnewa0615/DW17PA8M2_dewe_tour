import React from 'react';
import "../asset/style.css";
import leaf from '../asset/img/leaf.png';

function Footer() {
    return (
        <div className="footer">
            <p>Copyright @ 2020 Dewe Tour - Your Name - NIS. All Rights reserved</p>
            <img src={leaf} alt="" />
        </div>
    )
}

export default Footer
