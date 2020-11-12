import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../LandingPage/Footer';
import Header from '../Menu';

function GeneralInformation() {

    return (
        <>
            <Header />
            <Container fluid className='contact-full-part'>
                <Row className='contact-row'>
                    <Col xs={12} md={12} className='contact-div'>
                        <h1>General Information</h1>
                        <h4>Who are We?</h4>
                        <p>Turkish Law Blog (TLB) is a publication providing a comprehensive source of legal updates, analysis, insights, and news on Turkish Law and international law related to the area of expertise of its contributors. We are gathering together leading experts from law firms, arbitration institutions, and academia to report on the latest developments. The result is a fresh, high-quality, and timely examination of Turkish law.</p>
                        <h4>What is Our Focus?</h4>
                        <p>We are a new kind of media. Our focus is to become a go-to English language platform for Turkish legal society with contributions from recognized experts. Our format is new to the Turkish legal sector. The result is a serious, high-quality, professional blog about Turkish law presented in a timely, fresh way.</p>
                        <h4>What is Your Role?</h4>
                        <p>Of course, we welcome you as a faithful reader, The blog format provides an opportunity for everyone to participate, but we welcome comments must respect our Editorial Policy. We also will be inviting guest bloggers to contribute from time to time.</p>
                        <h4>Contact</h4>
                        <ul>
                            <li>Finsbury Park, London N4 2JW</li>
                            <li>101 Blackstock Road</li>
                            <li>T: 00 44 7957 068924</li>
                            <li>E: <a href='mail:info@turkishlawblog.com'>info@turkishlawblog.com</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default GeneralInformation;
