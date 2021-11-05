import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import decoration from "../../assets/Decoration.svg";
import NavBar from "../Header/NavBar";
import Menu from "../Header/menu";


const Logout = () => {
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
            <Container fluid className="userLogout">
                <Row>
                    <Col className="loginPanel">
                        <h3>Wylogowanie nastąpiło pomyślnie!</h3>
                        <img src={decoration} alt="decoration" />
                        <button className=" logoutButton btn mx-2">Main page</button>
                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default Logout;