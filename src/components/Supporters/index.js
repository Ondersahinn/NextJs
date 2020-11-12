import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../Menu'
import Footer from '../LandingPage/Footer'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import { colourOptions, SupportersContributors } from '../../utils';

import referencesLogo from '../../images/Oxford.png';
import referencesLogo2 from '../../images/GaryBorn.jpg';
import referencesLogo3 from '../../images/logo2.png';


function Supporters() {

    return (
        <>
            <Header />
            <Container fluid className='supporters-container-full'>
                <Row className='supporters-container-row'>
                    <Col className='supporters-left-col' xs={12} md={9}>
                        <div className='supporters-container-title'>
                            <h1>Supporters</h1>
                            <Link to='/generalInformation'>Become a Supporters</Link>
                        </div>
                        <Row className='supporters-left-row'>
                            <Col xs={12} md={9} className='supporters-left-div'>
                                <h4>Firm Overview</h4>
                                <p>Cetinkaya is a firm of forward-thinking lawyers providing innovative legal solutions for our clients with keen industry focus.Cetinkaya is a firm of forward-thinking lawyers providing innovative legal solutions for our clients with keen industry focus.
                                <span><a href='http://cetinkaya.com/' alt='Cetinkaya'  target='_black'>www.cetinkaya.com</a></span>
                                </p>
                                <h4>Main Contacts</h4>
                                <ul>
                                    {SupportersContributors.map(
                                        element => {
                                            return (
                                                <Link to={`/contributor/${element._id}`} key={`Link${element._id}`}>
                                                    <li>
                                                        <img src={element.imageUrl} alt='' />
                                                        <p>{element.name}</p>

                                                    </li>
                                                </Link>
                                            );
                                        }
                                    )}

                                </ul>
                            </Col>
                            <Col xs={12} md={3} className='supporters-right-div'>
                                <Link to='/affiliates/' alt='Cetinkaya'><img src={referencesLogo3} alt='' /></Link>
                            </Col>
                        </Row>
                        <Row className='supporters-left-row'>
                            <Col xs={12} md={9} className='supporters-left-div'>
                                <h4>Firm Overview</h4>
                                <p>Cetinkaya is a firm of forward-thinking lawyers providing innovative legal solutions for our clients with keen industry focus.Cetinkaya is a firm of forward-thinking lawyers providing innovative legal solutions for our clients with keen industry focus.
                                <span><a href='http://cetinkaya.com/' alt='Cetinkaya'  target='_black'>www.cetinkaya.com</a></span>
                                </p>
                                <h4>Main Contacts</h4>
                                <ul>
                                    {SupportersContributors.map(
                                        element => {
                                            return (
                                                <Link to={`/contributor/${element._id}`} key={`Link${element._id}`}>
                                                    <li>
                                                        <img src={element.imageUrl} alt='' />
                                                        <p>{element.name}</p>

                                                    </li>
                                                </Link>
                                            );
                                        }
                                    )}

                                </ul>
                            </Col>
                            <Col xs={12} md={3} className='supporters-right-div'>
                                <Link to='/affiliates/' alt='Cetinkaya'><img src={referencesLogo3} alt='' /></Link>
                            </Col>
                        </Row>
                        <Row className='supporters-left-row'>
                            <Col xs={12} md={9} className='supporters-left-div'>
                                <h4>Firm Overview</h4>
                                <p>Cetinkaya is a firm of forward-thinking lawyers providing innovative legal solutions for our clients with keen industry focus.Cetinkaya is a firm of forward-thinking lawyers providing innovative legal solutions for our clients with keen industry focus.
                                <span><a href='http://cetinkaya.com/' alt='Cetinkaya' target='_black'>www.cetinkaya.com</a></span>
                                </p>
                                <h4>Main Contacts</h4>
                                <ul>
                                    {SupportersContributors.map(
                                        element => {
                                            return (
                                                <Link to={`/contributor/${element._id}`} key={`Link${element._id}`}>
                                                    <li>
                                                        <img src={element.imageUrl} alt='' />
                                                        <p>{element.name}</p>

                                                    </li>
                                                </Link>
                                            );
                                        }
                                    )}

                                </ul>
                            </Col>
                            <Col xs={12} md={3} className='supporters-right-div'>
                                <Link to='/affiliates/' alt='Cetinkaya'><img src={referencesLogo3} alt='' /></Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='index-contributor-right' xs={12} md={3}>
                        <div className='index-right-area-subscribe'>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Subscribe
                                </Button>
                            </Form>

                        </div>
                        <div className='index-right-area-filter-select'>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                placeholder='Practices & Sector'
                                name="color"
                                options={colourOptions}
                            />
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                placeholder='Contributors'
                                name="color"
                                options={colourOptions}
                            />
                        </div>
                        <div className='contributor-title'>
                            <h5>Editors & Contributors</h5>
                        </div>
                        {SupportersContributors.map(
                            element => {
                                return (
                                    <Link to={`/contributor/${element._id}`} key={`Link${element._id}`}>
                                        <div className='article-contributors' key={element._id}>
                                            <div className='article-contributors-left-desc'>
                                                <div className='author-name-company'>
                                                    <span>{element.name}</span>
                                                </div>
                                                <div className='article-count'>
                                                    <span className='article-count-company'>{element.company}</span>
                                                </div>
                                            </div>
                                            <div className='media-right'><img src={element.imageUrl} alt='contributors' /></div>
                                        </div>
                                    </Link>
                                );
                            }
                        )}
                        <div className='referencesLogo'>
                            <img src={referencesLogo} alt='referencesLogo' />
                            <img src={referencesLogo2} alt='referencesLogo2' />
                        </div>
                        <div className='most-read'>
                            <h5>Most Read Last Month</h5>
                            <h4>Why Do White-Collars Get Dirty?</h4>
                            <p>Introduction White-collar crime is still a common and global problem that negatively affects corpor...</p>
                            <h4>Dispute Resolution in Turkey</h4>
                            <p>The Questionnaire Covering All Aspects of Legislation and Practices in Dispute Resolution Cases in T...</p>
                            <h4>When Things Move in Opposite Directions: Reverse Mobbing & Turkish Law Analysis</h4>
                            <p>Initially used to describe a behaviour pattern in birds, it was not until the 1980s that the term mo...</p>
                            <h4>Regulation on Social Networks Has Been Accepted in Turkey</h4>
                            <p>I. IntroductionFor a long time, the place, and limits of social media in the legal order have been t...</p>
                            <h4>Guideline on the Expanding Power of On-Site Inspection (Digital Search Power) is Published by the Competition Authority</h4>
                            <p>1. Introduction"Guidelines on Examination of Digital Data in On-Site Inspection" [“the G...</p>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
    );
}

export default withRouter(Supporters);
