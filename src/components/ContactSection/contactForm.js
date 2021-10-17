import React from 'react';
import Form from "../ContactSection/form"


const ContactForm = () => {
    return (
        <div id="contact" className='ContactContainer' >
            <div className='ContactImage'/>
            <div className='ContactHero'>
                <h1>Skontaktuj się z nami</h1>
                <div className='ContactHeroDecoration'/>
                <Form/>
            </div>
        </div>
    );
};

export default ContactForm;