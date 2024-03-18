import React from 'react'

function Form() {
    return (
        <>
            <script type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
            <script type="text/javascript" src="../js/form-handler.js"></script>
            <div id="form">
                <h2 id="headingForm">Oppure scrivimi qua:</h2>
                <form id="contact-form" method="POST">
                    <fieldset id="personal">
                        <legend hidden >Informazioni personali</legend>
                        <label for="firstname">Nome:</label>
                        <input type="text" name="firstname" id="firstname" placeholder="Mario" required />
                        <label for="lastname">Cognome:</label>
                        <input type="text" name="lastname" id="lastname" placeholder="Rossi" required />
                        <label for="business">Azienda:</label>
                        <input type="text" name="business" id="business" placeholder="Azienda" />
                    </fieldset>

                    <fieldset id="personal-contacts">
                        <legend hidden >Informazioni di contatto</legend>
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="mario.rossi@esempio.it" required />
                        <label for="phone">Telefono:</label>
                        <input type="tel" name="phone" id="phone" placeholder="3331234567" inputMode="numeric" />
                    </fieldset>

                    <fieldset id="message">
                        <legend hidden >MEssaggio</legend>
                        <label for="subject">Oggetto:</label>
                        <input type="text" name="subject" id="subject" placeholder="Oggetto" required />
                        <label for="message">Messaggio:</label>
                        <textarea name="message" id="message" placeholder="Scrivi qui il tuo messaggio" rows="5"
                            cols="40"></textarea>
                        <input id="submit-form" type="submit" value="Invia" />
                    </fieldset>

                </form>
            </div>
        </>
    )
}

export default Form