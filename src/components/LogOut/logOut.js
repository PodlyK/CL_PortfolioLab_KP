import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import {Container, Row, Col} from "react-bootstrap";
import decoration from "../../assets/Decoration.svg";
import NavBar from "../Header/NavBar";
import Menu from "../Header/menu";


const LogOut = () => {

    let history = useHistory();

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
            <Container>
                <Row className="userLogout">
                    <Col className="loginPanel">
                        <h3>Wylogowanie nastąpiło pomyślnie!</h3>
                        <img src={decoration} alt="decoration" />
                        <button onClick={() => {history.push('/')}} className=" logoutButton-btn-mx-2">Strona główna</button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LogOut;