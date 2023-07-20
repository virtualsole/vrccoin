import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import connect from '../../assets/connect.gif'
import matic from '../../assets/matic.gif'
import matics from '../../assets/matics.gif'
import build from '../../assets/build.gif'

import './sleeves.css'

const Sleeves = () => {
    return (
        <>
            <Container className='mt-5 mb-5'>
                <Row className='respon'>
               
                    <div className="sleev_head mb-5">
                        <h1>Time to roll up your sleeves.</h1>
                    </div>
                 

                    
                        {/* Left Card */}
                        <Col>
                       
                            <Card className='sleeve_card h-100 mb-3'>
                                <Card.Img className="img_size"  src={connect} />
                                <Card.Body className='sleeve_card_bd'>
                                    <div>
                                        <h4 className="head-sleleve">Decentralized Exchange</h4>
                                        <span className="sleve-pera2">A high-performance decentralized peer-to-peer multi-currency exchange built directly into the blockchain</span>
                                    </div>
                                    <div>
                                        {/* <a href="" className="btn_seleve"> View Events </a> */}
                                    </div>
                                </Card.Body>
                            </Card>
                     
                        {/* Right Card */}
                       
                        </Col>
                        <Col>
                            <Card className='sleeve_card h-100 mb-3'>
                                <Card.Img className="img_size mb-5 mt-4" src={matic} />
                                <Card.Body>
                                    <div>
                                        <h4 className="head-sleleve">Cross-Currency Payments</h4>
                                        <span className="sleve-pera">
                                        Atomically settle multi-hop payments that cross currency or national boundaries with ease
                                        </span>
                                    </div>
                                    <div>
                                        {/* <a href="" className="btn_seleve"> Learn More </a> */}
                                    </div>
                                </Card.Body>
                            </Card>
                            </Col>
                        
                        

                            <Col>
                       
                       <Card className='sleeve_card h-100 mb-3'>
                           <Card.Img className="img_size"  src={build} />
                           <Card.Body className='sleeve_card_bd'>
                               <div>
                                   <h4 className="head-sleleve">High-scalability</h4>
                                   <span className="sleve-pera2">Strong scalability and smart contracts allow applications to be deployed on VRC in diverse ways, enabling VRCPROTOCOL to accommodate a sizable user base.</span>
                               </div>
                               <div>
                                   {/* <a href="" className="btn_seleve"> View Events </a> */}
                               </div>
                           </Card.Body>
                       </Card>
                
                   {/* Right Card */}
                  
                   </Col>
                   <Col>
                       <Card className='sleeve_card h-100 mb-3'>
                           <Card.Img className="img_size" src={matics} />
                           <Card.Body>
                               <div>
                                   <h4 className="head-sleleve">Marketplace</h4>
                                   <span className="sleve-pera">
                                      
ENTER THE COSMOS HUB
The heart of the Interchain.
Serving as the economic center of the Interchain, the Cosmos Hub is a blockchain that provides vital ecosystem services.

                                   </span>
                               </div>
                               <div>
                                   {/* <a href="" className="btn_seleve"> Learn More </a> */}
                               </div>
                           </Card.Body>
                       </Card>
                       </Col>
                   

                 
            

                
              
           
                </Row>
            </Container>
        </>
    )
}

export default Sleeves