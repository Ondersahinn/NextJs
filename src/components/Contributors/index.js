import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../Menu'
import Footer from '../LandingPage/Footer'
import Select from 'react-select';
import { searchAlphabet, colourOptions } from '../../utils'

function ContributorsPage() {

    const handleClick = (e) => {
        console.log(e)
        // const result = Contributors.filter(contributor => contributor.name === e);
    }

    return (
        <>
            <Header />
            <Container fluid className='contributors-container-full-part'>
                <Row className='contributors-container-full-row'>
                    <Col xs={12} md={8}>
                        <h1 className='contributors-page-title'>
                            Contributors
                    </h1>
                        <h5 className='contributors-page-sort-title'>Search for a Lawyer</h5>
                        <p className='contributors-page-description'>Every day our world-class trial lawyers, crisis managers, and strategic advisors pursue successful outcomes for our clients.</p>
                    </Col>
                    <Col xs={12} md={4} className='contributors-page-left-image'>
                        <img src='https://www.bsfllp.com/images/content/2/0/v3/2046/Lawyers-web.jpg' alt='Contributors' />
                    </Col>
                    <Col xs={12} md={12} className='contributors-page-filter-full-part'>
                        <h6>SEARCH BY LAST NAME</h6>
                        <div className='contributors-page-filter-button-group'>
                            {searchAlphabet.map(alphabet => {
                                return (
                                    <Button onClick={() => handleClick(alphabet)} key={alphabet}>
                                        {alphabet}
                                    </Button>
                                )
                            })}
                        </div>

                    </Col>

                    <Col xs={12} md={3} className='select-input-part'>

                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder='Contributors'
                            name="color"
                            options={colourOptions}
                        />
                    </Col>
                    <Col xs={12} md={3} className='select-input-part'>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder='Category'
                            name="color"
                            options={colourOptions}
                        />
                    </Col>
                    <Col xs={12} md={3} className='select-input-part'>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder='Affiliate'
                            name="color"
                            options={colourOptions}
                        />
                    </Col>
                    <Col xs={12} md={3} className='select-input-part'>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder='Date'
                            name="color"
                            options={colourOptions}
                        />
                    </Col>
                    <Col xs={12} md={3} className='select-input-part'>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder='Jurisdiction'
                            name="color"
                            options={colourOptions}
                        />
                    </Col>
                    <Col xs={12} md={3} className='select-input-part'>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder='Jurisdiction'
                            name="color"
                            options={colourOptions}
                        />
                    </Col>
                    <Col xs={12} md={3} className='select-input-part'>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder='Jurisdiction'
                            name="color"
                            options={colourOptions}
                        />
                    </Col>
                    <Col xs={12} md={3} className='select-input-part'>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder='Jurisdiction'
                            name="color"
                            options={colourOptions}
                        />
                    </Col>
                    <Col xs={12} md={12} className='search-input-filter-button'>
                        <h6>RESET FILTERS</h6>
                        <Button type="submit" variant="secondary">Filter </Button>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
    );
}

export default ContributorsPage;
