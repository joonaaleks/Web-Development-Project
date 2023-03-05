import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import { useState } from 'react';

export default function Register() {

    const [userData, setUserData] = useState({})

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
                setUserData(data)
            })
    }

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Container style={{ display: "flex", justifyContent: "center", width: "60%", margin: "0 auto" }}>
                <Card style={{ width: "30rem" }}>
                    <h1>REGISTER</h1>
                    <Card.Body>
                        <Form onSubmit={submit} onChange={handleChange} >

                            <Form.Group className='mb-4' controlId='Name'>
                                <Form.Label className='text-center'>Name</Form.Label>
                                <Form.Control type="text" name='username' placeholder='Enter Name'></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label className='text-center'>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter Email"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Enter Password"></Form.Control>
                            </Form.Group>

                            <Button variant='primary' type='submit'>
                                Register
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}