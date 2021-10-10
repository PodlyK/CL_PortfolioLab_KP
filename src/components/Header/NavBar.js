import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <ul className="navigationBar">
            <Link to="start">Start</Link>
            <Link to="steps">O co chodzi?</Link>
            <Link to="aboutUs">O nas</Link>
            <Link to="help">Fundacja i organizacje</Link>
            <Link to="contact">Kontakt</Link>
        </ul>
    );
};

export default NavBar;

