import React from 'react';
import Header from "./Header/header";
import Menu from "./Header/menu";
import NavBar from "./Header/NavBar";
import ThreeColumns from "./ThreeColumns/threeColumns";
import EasySteps from "./EasySteps/easySteps";

const Home = () => {
    return (
        <>
            <header className="headerContainer">
                <Menu />
                <NavBar />
                <Header />
            </header>
            <ThreeColumns />
            <EasySteps />
        </>
    );
};

export default Home;