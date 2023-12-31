import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // mail api
        emailjs.sendForm(
            'service_7fh4nx6', 
            'template_1d4pigs',
            form.current,
            '5NCZedujgHkFIVD1X')
        .then((result) => {
            console.log(result.text);
            alert("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name:</label>
                <input type="text" name="user_name" />
                <label>Email:</label>
                <input type="email" name="user_email" />
                <label>Message:</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Form