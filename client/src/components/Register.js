import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import { useState } from 'react';
import { useTranslation } from "react-i18next";

export default function Register() {
    const { t } = useTranslation();

    const [userData, setUserData] = useState({})

    //When form is submitted, POST user registeration data
    const submit = (e) => {
        e.preventDefault()
        console.log(userData)

        fetch("/api/users/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                if (data === false) {
                    //If registeration failed, alert the user with an error
                    alert(t("Alert"))
                } else if (data === true) {
                    //If registeration was success update user hook
                    alert(t("Success"))
                    setUserData(data)
                } else {
                    console.log("Error occured")
                }
            })
    }

    //On change of text field value, update hook with the data
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Container style={{ display: "flex", justifyContent: "center", width: "60%", margin: "0 auto" }}>
                <Card style={{ width: "30rem" }}>
                    <h1>{t("Register")}</h1>
                    <Card.Body>
                        {/*Registeration form, which contains input fields for user data*/}
                        <Form onSubmit={submit} onChange={handleChange} >

                            <Form.Group className='mb-4' controlId='Name'>
                                <Form.Label className='text-center'>{t("Name")}</Form.Label>
                                <Form.Control type="text" name='username' placeholder={t("Enter Username")}></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label className='text-center'>{t("Email address")}</Form.Label>
                                <Form.Control type="email" name='email' placeholder={t("Enter Email")}></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>{t("Password")}</Form.Label>
                                <Form.Control type="password" name='password' placeholder={t("Enter Password")}></Form.Control>
                            </Form.Group>

                            <Button variant='primary' type='submit'>
                                {t("Register")}
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}