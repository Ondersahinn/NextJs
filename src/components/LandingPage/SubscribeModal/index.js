import React, { useState } from 'react';
import { Modal,Button,Container,Col ,Row} from "react-bootstrap";
import logo from '../../../images/tblog2.png'

function SubscribeModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const handleShowTime = () => {
    //     setTimeout(handleShow, 360000);
    // }

    // useEffect(() => {
    //     handleShowTime();
    //   });
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <Container>
          <Row>
            <Col xs={12} md={6}>
              <img src={logo} alt='logo' />
            </Col>
            <Col xs={6} md={6}>
             <h5>Above The Law Daily Newsletter</h5>
             <p>Join ower 50,0000 professionals!</p>
            </Col>
          </Row>
          </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Subscribe Now
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default SubscribeModal;