import React from 'react';
import './Contact.css';

function Contact() {
    return (
	<div className="contact-container">
		<div className="contact-background"></div>
		<div className="ContactMe">
			<h1 className="section__title--separator">Contact me</h1>
			<form action="https://formsubmit.co/germanchrystan@gmail.com" method="POST">
				<label className="Name" for="Name">Name:</label>
					<input type="text" name="name" id="Name" required />
				<label className="Email" for="E-mail">E-mail:</label>
					<input type="email" name="email" id="E-mail" required/>
				<label className="Message" for="Message">Message:</label>
					<textarea name="message" id="Message" required></textarea>
				<input type="hidden" name="_next" value="https://german-chrystan.vercel.app/thankyou"/>
				<input type="hidden" name="_subject" value="New Portfolio Message!"/>
				<input className="Button ContactMe__Form--Submit" type="submit" value="SEND"/>
			</form>
		</div>
	</div>
    )
}

export default Contact
