import React from "react";

const InfoSection = () => {
    return (
      <div id="help" className="infoContainer">
          <h1>Komu pomagamy?</h1>
          <div className="infoContainerSmall">
              <h3>Fundacjom</h3>
              <h3>Organizacjom Pozarządowym</h3>
              <h3>Lokalnym zbiórkom</h3>
          </div>
          <div className="infoContainerText">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br/>
              którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br/>
              komu pomagają i czego potrzebują.
          </div>
          <div className="infoContainerSecondSmall">
              <div className="row">
                  <div className="rowLeftSide">
                      <h4>Fundacja “Dbam o Zdrowie”</h4>
                      <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                  </div>
                  <div className="rowRightSide">
                      <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                  </div>
              </div>
              <div className="row">
                  <div className="rowLeftSide">
                      <h4>Fundacja “Dla dzieci”</h4>
                      <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                  </div>
                  <div className="rowRightSide">
                      <p>ubrania, meble, zabawki</p>
                  </div>
              </div>
              <div className="row">
                  <div className="rowLeftSide">
                      <h4>Fundacja “Bez domu”</h4>
                      <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                  </div>
                  <div className="rowRightSide">
                      <p>ubrania, jedzenie, ciepłe koce</p>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default InfoSection;