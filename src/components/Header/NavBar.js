import React from 'react';
// import {Link} from 'react-router-dom';
import {Link} from 'react-scroll';

const NavBar = () => {
    return (
        <ul className="navigationBar">
            <Link     activeClass="active"
                      to="start"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                Start</Link>
            <Link     activeClass="active"
                      to="steps"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                O co chodzi?</Link>
            <Link     activeClass="active"
                      to="aboutUs"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                O nas</Link>
            <Link     activeClass="active"
                      to="help"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                Fundacja i organizacje</Link>
            <Link     activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                Kontakt</Link>
        </ul>
    );
};

export default NavBar;

