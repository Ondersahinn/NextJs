import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import footerLogo from '../../../images/TurkishLawBlog-Logo-8.png';

function Footer() {

    return (
        <Container fluid className='footer-full-part'>
            <Row className="justify-content-md-center">
                <Col xs={12} md={3} className='footer-logo-div'>
                    <Link to="/" key={`Link`} key='logoLink'>
                        <img src={footerLogo} alt='logo' className='footer-logo' />
                    </Link>
                </Col>
                <Col xs={12} md={3}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <h5>About Us</h5>
                        <Link to={`/generalInformation`} key={`Link`}>

                            General Information
                        </Link>
                        <Link to="/supporters" key={`Link`} key='SupportersLink'>
                           Supporters
                        </Link>

                    </Nav>
                </Col>
                <Col xs={12} md={3} className='policy'>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <h5>Policy</h5>
                        <Link to="/userAgreement">User Agreement & Disclaimer</Link>
                        <Link to="/privacyPolicy">Privacy Policy & Cookie Notice</Link>
                        <Link to="/editorialGuidelines">Editorial Guidelines</Link>
                        <Link to="/editorialPolicy">Editorial Policy</Link>

                    </Nav>
                </Col>

            </Row>

        </Container>
    );
}

export default withRouter(Footer);
