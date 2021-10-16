import React from "react";
import signature from "../../assets/Signature.svg";
import people from "../../assets/People.jpg";

const AboutUs = () => {
    return (
        <div id="aboutUs" className="aboutUsContainer">
            <div className="aboutUsLeftContainerSmall">
                <h1>O nas</h1>
                <h3>Nori grape silver beet broccoli kombu beet</h3>
                <h3>N greens fava bean potato quandong celery. Bunya</h3>
                <h3>nuts black-eyed pea pririe turnip leek lentil</h3>
                <h3>turnip greens parsnip.</h3>
                <img src={signature} alt="signature" className="aboutUsLeftContainerSmallSignature"/>
            </div>
            <div className="aboutUsRightContainerSmall">
                <img src={people} alt="people" className="aboutUsContainerPeople"/>
            </div>
        </div>
    );
};

export default AboutUs;