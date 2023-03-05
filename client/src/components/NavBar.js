import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Row from 'react-bootstrap/Row'

export default function NavBar() {
    return (
        <Navbar className="bg-white shadow-sm mb-3">
            <Container fluid>
                <Nav>
                    <Container fluid>
                        <Row md={2}>
                            <Nav.Link to="/" as={NavLink}>
                                Home
                            </Nav.Link>
                            <Nav.Link to="/posts" as={NavLink}>
                                Posts
                            </Nav.Link>
                        </Row>
                    </Container>
                </Nav>
                <Nav>
                    <Container>
                        <Row md={2}>
                            <Nav.Link to="/login" as={NavLink}>
                                Login
                            </Nav.Link>
                            <Nav.Link to="/register" as={NavLink}>
                                Register
                            </Nav.Link>
                        </Row>
                    </Container>
                </Nav>
            </Container>
        </Navbar>
    )
}