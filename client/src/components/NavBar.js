import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button';

export default function NavBar() {
    //Changing languages functions
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }
    //Returning navigation bar
    return (
        <Navbar className="bg-white shadow-sm mb-3">
            <Container fluid>
                <Nav>
                    <Container fluid>
                        <Row md={2}>
                            <Nav.Link to="/" as={NavLink}>
                                {t("Home")}
                            </Nav.Link>
                            <Nav.Link to="/posts" as={NavLink}>
                                {t("Posts")}
                            </Nav.Link>
                        </Row>
                    </Container>
                </Nav>
                <Nav>
                    <Container>
                        <Row md={2}>
                            <Nav.Link to="/login" as={NavLink}>
                                {t("Login")}
                            </Nav.Link>
                            <Nav.Link to="/register" as={NavLink}>
                                {t("Register")}
                            </Nav.Link>
                            <Button id="fi" onClick={() => changeLanguage("fi")} color="inherit" variant="link">
                                FI
                            </Button>
                            <Button id="en" onClick={() => changeLanguage("en")} color="inherit" variant="link">
                                EN
                            </Button>
                        </Row>
                    </Container>
                </Nav>
            </Container>
        </Navbar>
    )
}