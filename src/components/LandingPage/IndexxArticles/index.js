import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { stockmarketName, Contributors } from '../../../utils';
import Select from 'react-select';
import { colourOptions } from '../../../utils';
import referencesLogo from '../../../images/Oxford.png';
import referencesLogo2 from '../../../images/GaryBorn.jpg';


function IndexArticles() {
    const currentArticles = stockmarketName.map(
        element => {
            return (
                <div className='article-map-div' key={element._id} >
                    <Col xs={12} md={12} className='blog-left-dec' >
                        <Link to={`/articles/${element.normalizeName}`} key={`Link${element._id}`}>
                            <h4>{element.title}</h4>
                        </Link>
                        <div className='article-contributor'>
                            <span className='article-author'> <Link to='/contributor/b1sdeb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b'>{element.author}</Link>,
                            <span className='article-company'><Link to='affiliates/'>{element.company}</Link></span>
                            </span>
                            <span className='article-date'>{element.createDateTime}</span>

                        </div>
                        <p className='article-description'>{element.shortDescription}</p>
                    </Col>

                </div>

            );
        }
    )


    return (
        <>
            
            <Container fluid className='index-recent-post-container'>
                <Row>
                    <Col xs={12} md={9} className='index-left-articllist'>
                        <Row>
                            <React.Fragment key={currentArticles.length}>
                                <Row style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
                                    <Col xs={12} md={6} className='index-one-area'>

                                        {currentArticles.length > 0 ? (
                                            currentArticles
                                        ) : (
                                                <p>No course Found</p>
                                            )}
                                    </Col>
                                    <Col xs={12} md={6} className='index-two-area'>

                                        {currentArticles.length > 0 ? (
                                            currentArticles
                                        ) : (
                                                <p>No course Found</p>
                                            )}
                                    </Col>

                                </Row>
                            </React.Fragment>


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
                        {Contributors.map(
                            element => {
                                return (
                                    <Link to={`/contributor/${element._id}`} key={`Link${element._id}`}>
                                        <div className='article-contributors' key={element._id}>
                                            <div className='media-right'><img src={element.imageUrl} alt='contributors' /></div>
                                            <div className='article-contributors-left-desc'>
                                                <div className='author-name-company'>
                                                    <span>{element.name}</span>
                                                </div>
                                                <div className='article-count'>
                                                    <span className='article-count-company'>{element.company}</span>
                                                </div>
                                            </div>
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
        </>
    );
}

export default withRouter(IndexArticles);
