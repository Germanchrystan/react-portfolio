import React from 'react';
import './Contact.css';

function Contact() {
    return (
    <section class="ContactMe">
		<h1 class="section__title--separator">Contact me</h1>
		<form action="https://formsubmit.co/germanchrystan@gmail.com" method="POST">
			<label class="Name" for="Name">Name:</label>
				<input type="text" name="name" id="Name" required />
    		<label class="Email" for="E-mail">E-mail:</label>
				<input type="email" name="email" id="E-mail" required/>
			<label class="Message" for="Message">Message:</label>
				<textarea name="message" id="Message" required></textarea>
            <input type="hidden" name="_next" value="/thankyou"/>
            <input type="hidden" name="_subject" value="New Portfolio Message!"/>
			<input className="Button ContactMe__Form--Submit" type="submit" value="SEND"/>
		</form>
	</section>
    )
}

export default Contact
