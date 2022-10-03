import React from 'react';
import './Card.css';
import Qr from './Qr.js';
import Info from './Info.js';

function Card() {
	return (
    <div className="card">
        <Qr />
        <Info />
    </div>
    );
}

export default Card;
