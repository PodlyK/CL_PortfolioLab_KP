import React from "react";
import {Link} from "react-router-dom";
import tshirt from "../../assets/Icon-1.svg"
import bag from "../../assets/Icon-2.svg"
import magnifire from "../../assets/Icon-3.svg"
import circle from "../../assets/Icon-4.svg"

const EasySteps = () => {
    return (
        <div id="steps" className="fourStepsContainerBig">
            <h1>Wystarczą 4 proste kroki</h1>
            <div className="fourStepsContainerSmall">
                <div className="SmallSection">
                    <img src={tshirt} alt="T-shirt"/>
                    <p>Wybierz rzeczy</p>
                    <hr className="StepsLine"/>
                    <p>ubrania, zabawki, <br/> sprzęt i inne</p>
                </div>
                <div className="SmallSection">
                    <img src={bag} alt="Bag"/>
                    <p>Spakuj je</p>
                    <hr className="StepsLine"/>
                    <p>skorzystaj z <br/> worków na śmieci</p>
                </div>
                <div className="SmallSection">
                    <img src={magnifire} alt="MagniFire"/>
                    <p>Zdecyduj komu <br/> chcesz pomóc</p>
                    <hr className="StepsLine"/>
                    <p>wybierz zaufane <br/> miejsce</p>
                </div>
                <div className="SmallSection">
                    <img src={circle} alt="Circle"/>
                    <p>Zamów kuriera</p>
                    <hr className="StepsLine"/>
                    <p>kurier przyjedzie <br/> w dogodnym terminie</p>
                </div>
            </div>
            <Link to="/logowanie/">
                <button className="bigButton">ODDAJ RZECZY</button>
            </Link>
        </div>
    );
};

export default EasySteps;