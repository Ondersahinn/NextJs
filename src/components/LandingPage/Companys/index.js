import React from 'react';
import { CardDeck, Card, Container } from "react-bootstrap";
import card1 from '../../../images/logo.png';
import card2 from '../../../images/newlogo-tr.png';
import card3 from '../../../images/Kulacoglu.png';
import card4 from '../../../images/motti.PNG';


function Companys() {

    return (
        <Container className='company-container'>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={card1} />
                    <Card.Body>
                        <Card.Title>Egemenoğlu</Card.Title>
                        <Card.Text>
                        This card has supporting text below as a natural.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={card2} />
                    <Card.Body>
                    <Card.Title>Moral Partners</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural 
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={card3} />
                    <Card.Body>
                        <Card.Title>Kulaçoğlu</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural 
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={card4} />
                    <Card.Body>
                        <Card.Title>Miotti</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural
                          
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={card4} />
                    <Card.Body>
                        <Card.Title>Miotti</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container >
    );
}

export default Companys;