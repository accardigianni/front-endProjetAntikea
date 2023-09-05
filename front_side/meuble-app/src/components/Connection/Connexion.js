import React, { useState } from "react";
//import './Connection.css'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function LoginPage({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onLogin({ username, password });
    }

    return (
        <div>
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={12} xs={8}>
                <div className="border border-3 border-primary"></div>
                <Card className="shadow">
                <Card.Body>
                    <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">CONNEXION</h2>
                    <p className=" mb-5">Entrez votre email et mot de passe pour vous connecter</p>
                    <div className="mb-3">
                        <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                Email address
                            </Form.Label>
                            <Form.Control type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="user@exemple.com" />
                        </Form.Group>

                        <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                        >
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                        </Form.Group>
                        <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                        >
                        <p className="small">
                            <a className="text-primary" href="#!">
                            Mot de passe oublié?
                            </a>
                        </p>
                        </Form.Group>
                        <div className="d-grid">
                        <Button variant="primary" value="submit" type="submit">
                            Se connecter
                        </Button>
                        </div>
                    </Form>
                    <div className="mt-3">
                        <p className="mb-0  text-center">
                        Vous n'avez pas encore de compte ?{" "}
                        <a href="{''}" className="text-primary fw-bold">
                            Inscription
                        </a>
                        </p>
                    </div>
                    </div>
                </div>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    </div>
        
    )
}
