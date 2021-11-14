import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { useHistory } from 'react-router';
import decoration from "../../assets/Decoration.svg";
import NavBar from "../Header/NavBar";
import Menu from "../Header/menu";


const LogOut = () => {

    let history = useHistory();

    return (
        <>
            <div className="userLoginNav">
                <div>
                    <ul>
                        <Menu />
                    </ul>
                </div>
                <div>
                    <ul>
                        <NavBar />
                    </ul>
                </div>
            </div>
                <div className="loginPanel">
                    <h3>Wylogowanie nastąpiło pomyślnie!</h3>
                    <img src={decoration} alt="" />
                    <button className="logoutButton" onClick={() => {history.push('/')}}>Strona główna</button>
                </div>
        </>
    );
};

export default LogOut;