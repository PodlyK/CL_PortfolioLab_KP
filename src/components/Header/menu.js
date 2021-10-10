import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <Link to="/logowanie/">Zaloguj się</Link>
            <Link to="/rejestracja/">Załóż konto</Link>
        </div>
    );
};

export default Menu;