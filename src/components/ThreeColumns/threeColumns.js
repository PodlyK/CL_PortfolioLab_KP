import React from "react";

const ThreeColumns = () => {
    return (
        <article className="threeColumnsContainer">
            <section className="leftSide">
                <div className="number">10</div>
                <h2>ODDANYCH WORKÓW</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc <br/>
                    Pellentesque vel enim a elit viverra elementuma <br/>
                    Alliquam erat volutpat.
                </p>
            </section>
            <section className="middle">
                <div className="number">5</div>
                <h2>WSPARTYCH ORGANIZACJI</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc <br/>
                    Pellentesque vel enim a elit viverra elementuma <br/>
                    Alliquam erat volutpat.
                </p>
            </section>
            <section className="rightSide">
                <div className="number">7</div>
                <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc <br/>
                    Pellentesque vel enim a elit viverra elementuma <br/>
                    Alliquam erat volutpat.
                </p>
            </section>
        </article>
    );
};

export default ThreeColumns;