import React, { useState } from "react";
import { Card, Button, Form, FormControl, InputGroup, Container, Row, Col } from 'react-bootstrap';

import { connect } from "react-redux";
import { loginUser } from "../../data/actions/auth.actions";

import neatheatLogo from "../../assets/images/neatheat-logo.png"
import "./Login.scss";

const Login = ({ loginUser, authInfo }) => {

    // state
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Container fluid className="login-page">
            {
                authInfo.loading &&
                <div className="loading-overlay">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    <div className="text-white h3">
                        Signing You In..
                    </div>
                </div>
            }
            <Row>
                <Col style={{
                    display: "flex",
                    height: "100vh",
                    background: 'white'
                }}>
                    <div className="center">
                        <img src={neatheatLogo} alt="background" height="70" weight="70"></img>
                    </div>
                </Col>
                <Col className="login-bgimage" style={{ padding: '0  ' }}>
                    <div className="gradient">
                        <div className="loginform">
                            <h2>Sign In</h2>
                            <Form>
                                <Form.Group>
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </Form.Group>
                                <Button className="login-btn" variant="primary" onClick={() => { 
                                        loginUser({ username, password })
                                    }} style={{ marginTop: '1.5rem' }}>
                                    Login
                                </Button>

                                <Row>
                                    <Col>
                                        <Form.Group style={{ marginTop: '0.8rem' }}>
                                            <div><a href="#" className="forgot-pwd">Forgot Password?</a></div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = (globalState) => ({
    authInfo: globalState.authReducer
})

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);