import React, { Fragment } from 'react';
import { Button, Container, Col, Row } from "react-bootstrap";
import Select from 'react-select';
import { colourOptions } from '../../utils';

function FilterArea() {


  return (
    <Fragment key='filter-area'>
      <div className='filter-area'>
        <Container className='filter-area-container'>
          <Row>
            <Col xs={12} md={1}>
              <h6>Search Categories</h6>
            </Col>
            <Col xs={12} md={2}>

              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder='Contributors'
                name="color"
                options={colourOptions}
              />
            </Col>
            <Col xs={12} md={2}>
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder='Category'
                name="color"
                options={colourOptions}
              />
            </Col>
            <Col xs={12} md={2}>
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder='Affiliate'
                name="color"
                options={colourOptions}
              />
            </Col>
            <Col xs={12} md={2}>
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder='Date'
                name="color"
                options={colourOptions}
              />
            </Col>
            <Col xs={12} md={2}>
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder='Jurisdiction'
                name="color"
                options={colourOptions}
              />
            </Col>
            <Col xs={12} md={1}>
              <Button type="submit" variant="secondary">Filter </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default FilterArea;
