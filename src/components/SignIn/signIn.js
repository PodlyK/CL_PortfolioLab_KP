import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import decoration from "../../assets/Decoration.svg";
import NavBar from "../Header/NavBar";
import Menu from "../Header/menu";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordRepeatError, setPasswordRepeatError] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handlePasswordRepeat = (e) => {
        setPasswordRepeat(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes('@') || email === '') {
            console.log('email does not includes @ or is empty string');
            setEmailError('Nieprawidłowy email');
        } else {
            setEmailError('');
        }

        if (password <= 6) {
            console.log('password is less than 6 characters');
            setPasswordError('Hasło musi zawierać co najmniej 6 znaków');
        } else {
            setPasswordError('');
        }

        if (passwordRepeat !== password) {
            console.log('passwords are not equal');
            setPasswordRepeatError('Hasła nie są takie same');
        } else {
            setPasswordRepeatError('');
        }

        if ( (email !== '' && email.includes('@')) && (password.length >= 6) && (password === passwordRepeat)) {
            clearBox();
        }
    }

    const clearBox = () => {
        setEmail('');
        setPassword('');
        setPasswordRepeat('');
    }

    return (
        <>
            <Container>
                <Row className="userSignInNav">
                    <Col>
                        <Menu />
                        <NavBar />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="userSigIn">
                <Row>
                    <Col className="SignInPanel">
                        <h3>Załóż konto</h3>
                        <img src={decoration} alt="decoration" />
                        <form className="SignInForm" onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <div className="SignInEmail">
                                    <label className="mb-2">Email</label>
                                    <input
                                        type="text"
                                        className="mb-2"
                                        onChange={handleEmail}
                                        value={email}/>
                                    <p>{emailError}</p>
                                </div>
                                <div className="SignInPassword">
                                    <label className="mb-2">Hasło</label>
                                    <input
                                        type="password"
                                        className="mb-2"
                                        onChange={handlePassword}
                                        value={password}/>
                                    <p>{passwordError}</p>
                                </div>
                                <div className="SignInPasswordRepeat">
                                    <label className="mb-2">Powtórz hasło</label>
                                    <input
                                        type="password"
                                        className="mb-2"
                                        onChange={handlePasswordRepeat}
                                        value={passwordRepeat}
                                    />
                                    <p>{passwordRepeatError}</p>
                                </div>
                            </div>
                            <div className="SignInButtons">
                                <Link to = "/logowanie/" className="btn-mx-2" style={{color: 'inherit', textDecoration: 'none'}}>Zaloguj się</Link>
                                <button type="submit" className="btn-submit-mx-2">Załóż konto</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SignIn;