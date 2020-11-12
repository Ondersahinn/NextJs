import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Select from 'react-select';
import { colourOptions, Contributors, stockmarketName } from '../../utils';
import Header from '../Menu';
import Footer from '../LandingPage/Footer';

import referencesLogo from '../../images/Oxford.png';
import referencesLogo2 from '../../images/GaryBorn.jpg';



var HtmlToReactParser = require('html-to-react').Parser;


function ArticleDetail(props) {

    var htmlToReactParser = new HtmlToReactParser();
    const [currentArticles, setCurrentArticles] = useState([])

    useEffect(() => {

        const currentArticle = stockmarketName.filter(
            element => {
                return element.normalizeName === props.match.params.normalizeName;
            }
        )
        setCurrentArticles(currentArticle[0]);
        console.log(props.match.params)
    }, [])

    const articleDetailContent = () => {
        if (currentArticles.title !== undefined) {
            return (
                <>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>My Title</title>
                    </Helmet>


                    <h2>{currentArticles.title}</h2>
                    <div className='article-detay-authorand-date'>
                        <img src={currentArticles.contributors.imageUrl} alt={currentArticles.contributors.name} />
                        <span className='article-detay-author-name'><Link to='/contributor/b1sdeb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b' >{currentArticles.contributors.name}</Link>,</span>
                        <span className='article-detay-author-company'><Link to='/affiliates'>{currentArticles.contributors.company}</Link></span>
                    </div>
                    <span className='article-detay-calendar'><i className="fas fa-calendar-alt"></i><span>{currentArticles.createDateTime}</span> </span>
                    {htmlToReactParser.parse(currentArticles.description)}
                    < div className='contributor-social-medya' >
                        <i className="fas fa-at"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-whatsapp-square"></i>
                        <i className="fas fa-file-pdf"></i>


                    </div >
                </>
            )
        }
        return '';
    }


    return (
        <>
            <Header />
            <Container fluid>
                <Row className='article-detay-row'>
                    <Col xs={12} md={9} className='article-detay-row-div'>
                        {articleDetailContent()}
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
                        {Contributors.map(
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


            </Container >
            <Footer />
        </>
    );
}

export default withRouter(ArticleDetail);
