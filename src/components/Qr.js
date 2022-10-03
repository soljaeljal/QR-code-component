import React from 'react';
import './Qr.css';
import pic from '../images/image-qr-code.png';

const Qr = () => {
	return (
		<div class="pic">
			<img src={pic} alt="QR code"></img>
		</div>
	);
};

export default Qr;
