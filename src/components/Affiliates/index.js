import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import {  constCompanyAbout } from '../../utils';
import Header from '../Menu';
import { Link } from 'react-router-dom';
import Footer from '../LandingPage/Footer';
import cetinkayaLogo from '../../images/cetinkayaLogo.jpg'

var HtmlToReactParser = require('html-to-react').Parser;


function Affiliates() {



    var htmlToReactParser = new HtmlToReactParser();

    return (
        <>
            <Header />
            <Container fluid className='company-detail-container-part'>
                <Row className='company-detay-row'>
                    <Col className='contributor-detail-left' xs={12} md={3}>
                        <img src={cetinkayaLogo} alt='cetinkaya' />
                        <div className='contributor-detail-author'>
                            <span className='contributor-detail-name'>Çetinkaya</span>
                            <span className='contributor-detail-company'><a target="_black"href='http://www.cetinkaya.com'>www.cetinkaya.com</a></span>
                        </div>

                    </Col>
                    <Col xs={12} md={9} className='contributor-detail-row-div'>
                        <Tab.Container defaultActiveKey="first">
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className='contributor-detail-nav-link'>About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className='contributor-detail-nav-link'>Contributors</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className='contributor-detail-tab-content'>
                                <Tab.Pane eventKey="first">
                                    {htmlToReactParser.parse(constCompanyAbout[0].about)}

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className='company-contribute-div'>
                                        <img src='https://turkishlawblog.com/img/turkish_law_blog__105.jpg' alt='' />
                                        <p><a href='#'>A.Orçun ÇETINKAYA</a></p>

                                    </div>
                                    <div className='company-contribute-div'>
                                        <img src='https://turkishlawblog.com/img/turkish_law_blog__105.jpg' alt='' />
                                        <p><a href='#'>A.Orçun ÇETINKAYA</a></p>

                                    </div>
                                    <div className='company-contribute-div'>
                                        <img src='https://turkishlawblog.com/img/turkish_law_blog__105.jpg' alt='' />
                                        <p><a href='#'>A.Orçun ÇETINKAYA</a></p>

                                    </div>
                                    <div className='company-contribute-div'>
                                        <img src='https://turkishlawblog.com/img/turkish_law_blog__105.jpg' alt='' />
                                        <p><a href='#'>A.Orçun ÇETINKAYA</a></p>

                                    </div>
                                </Tab.Pane>
                            </Tab.Content>

                        </Tab.Container>

                    </Col>

                </Row>
            </Container >
            <Footer />
        </>
    );
}

export default Affiliates;
