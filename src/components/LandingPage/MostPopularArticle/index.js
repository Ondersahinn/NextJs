import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

import articleImage from '../../../images/whitecollar.jpg';

function IndexArticles() {
   
    return (
        <>

            <Container fluid className='most-popular-article'>
            <h3>Most Popular</h3>

                <Row className='most-popular-article-row'>
                    <Col xs={12} md={12}>
                        <Row>
                            <Col xs={12} md={5} className='most-popular-left-article'>
                                <img src={articleImage} alt='article' />
                                <div className='left-description'>
                                    <p>The Truth About Design Is About To Be Revealed.</p>
                                    <p className='short-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor nulla, facilisis ut vulputate sed, vestibulum eget diam. Vivamus…</p>
                                    <div className='author-date'>
                                        <p>A.Orçun Çetin Kaya</p>
                                        <span>FEBRUARY 25, 2019</span>
                                    </div>
                                    <span className='read-later'>READ MORE</span>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='most-popular-middle-article'>
                                <div className='most-popular-middle-article-div'>
                                    <img src={articleImage} alt='article' />
                                    <div className='left-description'>
                                        <p>The Truth About Design Is About To Be Revealed.</p>
                                        <div className='author-date'>
                                            <p>A.Orçun Çetin Kaya</p>
                                            <span>FEBRUARY 25, 2019</span>
                                        </div>
                                        <span className='read-later'>READ MORE</span>
                                    </div>

                                </div>
                                <div className='most-popular-middle-article-div'>
                                    <img src={articleImage} alt='article' />
                                    <div className='left-description'>
                                        <p>The Truth About Design Is About To Be Revealed.</p>
                                        <div className='author-date'>
                                            <p>A.Orçun Çetin Kaya</p>
                                            <span>FEBRUARY 25, 2019</span>
                                        </div>
                                        <span className='read-later'>READ MORE</span>
                                    </div>

                                </div>
                                <div className='most-popular-middle-article-div'>
                                    <img src={articleImage} alt='article' />
                                    <div className='left-description'>
                                        <p>The Truth About Design Is About To Be Revealed.</p>
                                        <div className='author-date'>
                                            <p>A.Orçun Çetin Kaya</p>
                                            <span>FEBRUARY 25, 2019</span>
                                        </div>
                                        <span className='read-later'>READ MORE</span>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <ListGroup variant="undefined">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>More In This Category</ListGroup.Item>

                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Container>


        </>
    );
}

export default IndexArticles;
