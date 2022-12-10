import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./ContactForm.module.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const ContactForm = () => {
    const [formStatus, setFormStatus] = useState('Skicka')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Skickar...')
        const { name, email, message } = e.currentTarget.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
            setValidated(true)
            return
        }

        setValidated(true)
        onSubmit(event)
    };
    return (
        <div className={styles.contactForm}>
            <div className="container">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>E-post address</Form.Label>
                        <Form.Control required type="email" placeholder="Skriv in din e-post" />
                        <Form.Text className="text-muted">
                            Vi delar inte din e-post adress med någon annan.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Namn</Form.Label>
                        <Form.Control required type="text" placeholder="Skriv in ditt namn" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message">
                        <Form.Label>Meddelande</Form.Label>
                        <Form.Control required as="textarea" placeholder="Meddelande..." />
                        <Form.Text className="text-muted">
                            Var så tydlig som möjligt och skriv vad ditt ärende handlar om.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {formStatus}
                    </Button>
                </Form>
            </div>

        </div>

    );
}
export default ContactForm
