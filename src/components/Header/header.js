import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <main className="heroContent">
            <div className="rightSide">
                <h1>Zacznij pomagać!</h1>
                <h1> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <Link to="/logowanie/">
                    <button className="bigButton">oddaj rzeczy</button>
                </Link>
                <Link to="/logowanie/">
                    <button className="bigButton">zorganizuj zbiórkę</button>
                </Link>
            </div>
        </main>
    );
};

export default Header;

