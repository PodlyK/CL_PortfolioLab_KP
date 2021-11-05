import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import decoration from "../../assets/Decoration.svg";
import NavBar from "../Header/NavBar";
import Menu from "../Header/menu";

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasEmailError, setHasEmailError] = useState(false);
    const [hasPasswordError, setHasPasswordError] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            setHasEmailError(true);
        } else {
            setHasEmailError(false);
        }
        if (password.length < 6) {
            setHasPasswordError(true);
        } else {
            setHasPasswordError(false);
        }

        if (hasEmailError === false && hasPasswordError === false) {
            clearBox();
        }
    }

    const clearBox = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <Container>
                <Row className="userLoginNav">
                    <Col>
                        <Menu />
                        <NavBar />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="userLogin">
                <Row>
                    <Col className="loginPanel">
                        <h3>Zaloguj się</h3>
                        <img src={decoration} alt="decoration" />
                        <form className="loginForm" onSubmit={handleSubmit}>
                            <div>
                                <div className="loginEmail">
                                    <label className="mb-2">Email</label>
                                    <input
                                        type="text"
                                        className="mb-2"
                                        onChange={handleEmail}
                                        value={email}/>
                                    {hasEmailError && <p>Podano nieprawidłowy email</p>}
                                </div>
                                <div className="loginPassword">
                                    <label className="mb-2">Hasło</label>
                                    <input
                                        type="password"
                                        className="mb-2"
                                        onChange={handlePassword}
                                        value={password}/>
                                    {hasPasswordError && <p>Podane hasło jest za krótkie</p>}
                                </div>
                            </div>
                            <div className="loginButtons">
                                <Link to="/rejestracja/" className="btn-mx-2" style={{color: 'inherit', textDecoration: 'none'}}>Załóż konto</Link>
                                <button type="submit" className="btn-submit-mx-2">Zaloguj się</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LogIn;