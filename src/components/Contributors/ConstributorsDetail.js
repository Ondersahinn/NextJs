import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Contributors, stockmarketName } from '../../utils';
import Header from '../Menu';
import Footer from '../LandingPage/Footer';

var HtmlToReactParser = require('html-to-react').Parser;


function ConstributorsDetail(props) {

    const currentContributors = Contributors.filter(
        element => {
            return element._id === props.match.params.id;
        }
    )

    const currentContributorArticles = stockmarketName.filter(
        element => {
            return currentContributors[0]._id === element.contributors._id;
        }
    )

    const currentArticles = currentContributorArticles.map(
        element => {
            return (
                <div className='article-map-div' key={element._id} >
                    <Col xs={12} md={12} className='blog-left-dec' >
                        <Link to={`/articles/${element.normalizeName}`} key={`Link${element._id}`}>
                            <h4>{element.title}</h4>
                        </Link>
                        <div className='article-contributor'>
                            <span className='article-eye'><i className="fas fa-eye"></i> 238</span>
                            <span className='article-date'>{element.createDateTime}</span>

                        </div>
                        <p className='article-description'>{element.shortDescription}</p>



                    </Col>

                </div>

            );
        }
    )


    var htmlToReactParser = new HtmlToReactParser();

    return (
        <>
            <Header />
            <Container fluid className='contributor-detay-container'>
                <Row className='contributor-detay-row'>
                    <Col className='contributor-detail-left' xs={12} md={3}>
                        <img src={currentContributors[0].imageUrl} alt={currentContributors[0].name} />
                        <div className='contributor-detail-author'>
                            <span className='contributor-detail-name'>{currentContributors[0].name}</span>
                            <span className='contributor-detail-company'><a href={currentContributors[0].website} target="_black">{currentContributors[0].company}</a></span>
                            <span className='contributor-detail-mail'><a href={'mailto:'+currentArticles[0].mail}>{currentContributors[0].mail}</a></span>
                        </div>

                    </Col>
                    <Col xs={12} md={9} className='contributor-detail-row-div'>
                        <Tab.Container defaultActiveKey="first">
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className='contributor-detail-nav-link'>Biography</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className='contributor-detail-nav-link'>Articles</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className='contributor-detail-tab-content'>
                                <Tab.Pane eventKey="first">
                                    {htmlToReactParser.parse(currentContributors[0].biography)}
                                    {htmlToReactParser.parse(currentContributors[0].practiceAreas)}

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <React.Fragment key={currentArticles.length}>
                                        <Row style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
                                            <Col xs={12} md={12} className='contributor-detail-tab-content-article'>

                                                {currentArticles.length > 0 ? (
                                                    currentArticles
                                                ) : (
                                                        <p>No course Found</p>
                                                    )}
                                            </Col>

                                        </Row>
                                    </React.Fragment>
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

export default ConstributorsDetail;
