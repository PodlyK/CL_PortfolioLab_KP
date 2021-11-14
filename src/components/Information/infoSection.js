import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import decoration from "../../assets/Decoration.svg";
import Posts from "./posts";
import Pagination from "./pagination";
import {foundationsData} from "./Data/foundationsData";
import {organisationsData} from "./Data/organisationsData";
import {localEventsData} from "./Data/localEventsData";

const InfoSection = () => {
    // return (
      // <div id="help" className="infoContainer">
      //     <h1>Komu pomagamy?</h1>
      //     <div className="infoContainerSmall">
      //         <h3>Fundacjom</h3>
      //         <h3>Organizacjom Pozarządowym</h3>
      //         <h3>Lokalnym zbiórkom</h3>
      //     </div>
      //     <div className="infoContainerText">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br/>
      //         którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br/>
      //         komu pomagają i czego potrzebują.
      //     </div>
      //     <div className="infoContainerSecondSmall">
      //         <div className="row">
      //             <div className="rowLeftSide">
      //                 <h4>Fundacja “Dbam o Zdrowie”</h4>
      //                 <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
      //             </div>
      //             <div className="rowRightSide">
      //                 <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
      //             </div>
      //         </div>
      //         <div className="row">
      //             <div className="rowLeftSide">
      //                 <h4>Fundacja “Dla dzieci”</h4>
      //                 <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
      //             </div>
      //             <div className="rowRightSide">
      //                 <p>ubrania, meble, zabawki</p>
      //             </div>
      //         </div>
      //         <div className="row">
      //             <div className="rowLeftSide">
      //                 <h4>Fundacja “Bez domu”</h4>
      //                 <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
      //             </div>
      //             <div className="rowRightSide">
      //                 <p>ubrania, jedzenie, ciepłe koce</p>
      //             </div>
      //         </div>
      //     </div>
      // </div>
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [description, setDescription] = useState('');

    const handleClickFoundations = () => {
        setPosts(foundationsData);
        setDescription("W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.")
    }

    const handleClickOrganisations = () => {
        setPosts(organisationsData);
        setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
    }

    const handleClickLocalEvents = () => {
        setPosts(localEventsData);
        setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <Container>
            <Row>
                <Col className="whoWeHelp" id="whoWeHelp">
                    <h2>Komu pomagamy?</h2>
                    <img src={decoration} alt="decoration line"/>
                    <ul>
                        <li onClick={handleClickFoundations}>Fundacjom</li>
                        <li onClick={handleClickOrganisations}>Organizacjom pozarządowym</li>
                        <li onClick={handleClickLocalEvents}>Lokalnym zbiorkom</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col className="listOfFoundations">
                    <h5>{description}</h5>
                    <Posts posts={currentPosts} />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default InfoSection;