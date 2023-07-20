import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Col, Container, Form, Row } from 'react-bootstrap'

import './newsletter.css'

const Newsletter = () => {
    return (
        <>
            <div className='news mt-5 mb-5'>
                <Container className=''>
                    <Row>
                        <Col className='news_col'>
                            <div className="newsletter text-start">
                                <div>
                                    <span className='news_span'>stay upto date</span>
                                    <h4 className='news_head mt-3'>Get Our Newsletter</h4>
                                </div>
                                <div className='inp'>
                                <Form.Control className='news_mail d-flex gap-5 mt-3 text-white' placeholder='Enter your email' />
                                    <i> <AiOutlineArrowRight className='news_icon'/> </i>
                                </div>
                               
                            </div>
                            <div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Newsletter