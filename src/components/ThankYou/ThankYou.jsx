import React from 'react'
import './ThankYou.css';
import {Link} from 'react-router-dom';

function ThankYou() {
    return (
        <div class="thankyou-container">
            <div class="thankyou-background"></div>
            <div class="thankyou-message-container">
                <h1>Thank you for your message</h1>
                <p>I`ll get in touch as soon as I can</p>
                <Link to="/">Go back to the main page</Link>
            </div>
        </div>
    )
}

export default ThankYou
