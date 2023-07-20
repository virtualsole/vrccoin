import React, {useState} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { AiOutlineArrowRight } from 'react-icons/ai'

import './styles/polycards.css';

const PolyCards = () => {
    const [cards, setCards] = useState([
        {
            id: 1, 
            
            title: 'Build',
            pera: 'Get access to our documents, and start building'
        },
        {
            id: 2, 
           
            title: 'Stake',
            pera: 'Unlock the Hidden wealth of VRC Blockchain'
        },
        {
            id: 3, 
            title: 'Use VRCScan',
            pera: ' Bridge, Swap and Manage your assets on VRCScan.'
        }
    ]);
    return (
        <>
            <Container className='mt-5 mb-5'>
                <Row>
                {cards.map((card) => (


                    <Col className='col-lg-4 col-sm-12 respon'>
                        <div className="polycards d-flex">
                            {/* Card 1 */}
                            <Card className='d-flex flex-row p_card' >
                                <Card.Body className='text-start pt-4 mt-4'>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.pera}</Card.Text>
                                </Card.Body>
                                <div className='d-flex align-self-center pl_arr'>
                                    <i> <AiOutlineArrowRight className='icons'/> </i>
                                </div>
                            </Card>
                            
                      
                       
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}

export default PolyCards