import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Buffer } from 'buffer';

//Login page
export default function Login({ setJwt, jwt, user, setUser }) {

    //Submit login data to the backend to be validated from the database
    const submit = (e) => {
        e.preventDefault()

        fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user),
            mode: "cors"
        })
            .then(response => response.json())
            .then((data) => {
                if (data.token) {
                    setJwt(true)
                    setUser(JSON.parse(Buffer.from(data.token.split(".")[1], "base64").toString()))
                }
            })
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Container style={{ display: "flex", justifyContent: "center", width: "60%", margin: "0 auto" }}>
                <Card style={{ width: "30rem" }}>
                    <h1>LOGIN</h1>
                    <Card.Body>
                        <h1>{jwt ? "Login success" : ""}</h1>
                        <Form onSubmit={submit} onChange={handleChange}>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Control type="username" name="username" placeholder="Enter Username"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Control type="password" name="password" placeholder="Enter Password"></Form.Control>
                            </Form.Group>

                            <Button variant="primary" type="submit">Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}