import React from "react";
import "../../styles/Main/Main.css"
import {Button, Carousel, Col, Container, Row} from "react-bootstrap";
import Piape from "../../assets/images/Piape.png";
import rec_icon from "../../assets/icons/incons_recruteur.png";
import etu_icon from "../../assets/icons/incons_etudiant.png";
import Etudiant from "../../assets/images/stage.jpg";
import Recruteur from "../../assets/images/espace_recruteur.jpg";
import NewBack from "../../assets/images/newbackground.jpg"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

const Main=()=>{
    return (
        <div>

            <div>
                <Carousel>
                    <Carousel.Item>
                        <div className="test">
                        <img
                            className="d-block w-100"
                            src={NewBack}
                            alt="First slide"
                            id="slides"
                        />
                        </div>
                        <Carousel.Caption>

                            <p className="text-image">IF YOU CARE ABOUT SOMETHING ENOUGH , YOU WILL FIND THE WAY TO MAKE IT HAPPEN </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="test">
                        <img
                            className="d-block w-100"
                            src={Etudiant}
                            alt="Second slide"
                            id="slides"
                        />
                        </div>
                        <Carousel.Caption>
                            <h3 className="espaceEtudiant">Espace Etudiant</h3>
                            <Link to="/Detaille"><button className="btn btn-outline-secondary">Savoir Plus</button></Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="test">
                        <img
                            className="d-block w-100"
                            src={Recruteur}
                            alt="Third slide"
                        />
                        </div>
                        <Carousel.Caption>
                            <h3 className="espaceRecruteur">Espace Recruteur</h3>
                            <Link to="/Detaille"><button class="btn btn-outline-light">Savoir Plus</button></Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="jss801 jss802 jss803" id='Serv'>
                <div className="jss789">
                    <div className="MuiGrid-item">
                        <h2 className="jss804"> Candidatez ?? travers PIAPE</h2>
                        <h5 className="jss805">
                            Pour PIAPE , recruter c'est imaginer chaque jour une fa??on inspirante et efficace de faire votre projet de fin d'??tudes.
                            <br/>C'est proceder avec cr??ativit??s les besoins des entreprises et les ambitions des candidats.
                        </h5>
                    </div>
                    <div>
                        <div className="jss98 MuiGrid-root MuiGrid-container">
                            <Container className="cont" >
                                <Row >
                                    <Col>
                                        <div className=" test1 MuiGrid-root jss99  MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4">
                                            <div className="jss806">
                                                <img src={etu_icon} className="imgRec"/>
                                                <h4 className="jss817 title">Candidatez ?? travers PIAPE</h4>
                                                <p className="description"> Postulez ?? l'une de nos offres et d??posez votre candidature <br/>pour ??tre enregistr?? dans nos bases et ??tre recommander <br/>pour achever votre parcours ??ducatif.</p>
                                                <Link to="/InscEtud"><button className="btn btn-outline-secondary">Inscrivez-vous!</button></Link>
                                                <Link to="/AuthEtud"><button className="btnRigth btn btn-outline-secondary">S'identifier</button></Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="test1 MuiGrid-root jss99  MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4">
                                            <div className="jss816 jss806">
                                                <img src={rec_icon} className="imgRec"/>
                                                <h4 className="jss817 title">Recrutez ?? travers PIAPE</h4>
                                                <p className="description"> D??posez votre catalogue et trouvez les meilleurs candidatures <br/>les plus adequats ?? vos sujets. </p>
                                                <Link to ="/InscRec"><button className="btn btn-outline-secondary">Inscrivez-vous!</button></Link>
                                                <Link to ="/AuthRec"><button className="btnRigth btn btn-outline-secondary">S'identifier</button></Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
}
export default Main;