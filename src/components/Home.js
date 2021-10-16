import React from 'react';
import Header from "./Header/header";
import Menu from "./Header/menu";
import NavBar from "./Header/NavBar";
import ThreeColumns from "./ThreeColumns/threeColumns";

const Home = () => {
    return (
        <>
            <header className="headerContainer">
                <Menu />
                <NavBar />
                <Header />
            </header>
            <ThreeColumns />
        </>
    );
};

export default Home;