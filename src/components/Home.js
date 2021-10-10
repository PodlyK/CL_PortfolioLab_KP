import React from 'react';
import Header from "./Header/header";
import Menu from "./Header/menu";
import NavBar from "./Header/NavBar";

const Home = () => {
    return (
        <>
            <header className="headerContainer">
                <Menu />
                <NavBar />
                <Header />
            </header>
        </>
    );
};

export default Home;