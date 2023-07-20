import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube, BsDiscord } from 'react-icons/bs'
import { SiMinutemailer } from 'react-icons/si'
import { FaRedditAlien } from 'react-icons/fa'
import logo from '../../assets/VRC LOGO 6 .png'

import './footer.css'

const Footer = () => {
    return (
        <>
            <Container className='footer mt-5 mb-2'>
                <Row className='flex-column'>
                    {/* Upper Footer */}
                    {/* <Col>
                        <div className="ftr_upr d-flex justify-content-between">
                            <div>
                                <h4>Footer</h4>
                            </div>
                            <div className="ftr_icons d-flex gap-4">
                                <i className='ftr_icon'> <AiOutlineTwitter /> </i>
                                <i className='ftr_icon'> <SiMinutemailer /> </i>
                                <i className='ftr_icon'> <BsDiscord /> </i>
                                <i className='ftr_icon'> <FaRedditAlien /> </i>
                                <i className='ftr_icon'> <BsGithub /> </i>
                                <i className='ftr_icon'> <BsInstagram /> </i>
                                <i className='ftr_icon'> <BsLinkedin /> </i>
                                <i className='ftr_icon'> <BsYoutube /> </i>
                            </div>
                        </div>
                    </Col> */}
                    {/* Lower Footer */}
                    <Col className='low_ftr mt-5 d-flex justify-content-between'>
                        {/* First Line */}
                        {/* <div className="fst_line w-25 text-start">
                            <div className="fst_sec">
                                <div className="head_ft ms-2">
                                    <p className='ms-5'>
                                        VRCScan is a Block Explorer and Analytics Platform for VRC Smart Chain.A decentralized smart contracts platform
                                    </p>
                                </div>
                            <div>
                                <img src={logo} alt="" className='img-fluid' />
                            </div>
                            </div>
                        </div> */}
                        {/* Second Line */}
                        <div className="sec_ln text-start">
                            <div className="head_ft mb-3">
                                <h5>Company</h5>
                            </div>
                            <hr />
                            <div className="low_ft">
                                <ul>
                                    <li>Advertise</li>
                                    <li>Deligate to VRC</li>
                                    <li>Contact Us</li>
                                    <li>Brand Assets</li>
                                    <li>Terms of Services</li>
                                    <li>Bug Bounty</li>
                                </ul>
                            </div>
                        </div>
                        {/* Third Line */}
                        <div className="trd_ln text-start">
                            <div className="head_ft mb-3">
                                <h5>Community</h5>
                            </div>
                            <hr />
                            <div className="low_ft">
                                <ul>
                                    <li>Api Documentation</li>
                                    <li>Knowledge</li>
                                    <li>Network Status</li>
                                </ul>
                            </div>
                        </div>
                        {/* Fourth Line */}
                        <div className="frth_line">
                            <div className="frth_fst_sec text-start">
                                <div className="head_ft mb-3">
                                    <h5>Products</h5>
                                </div>
                                <hr />
                                <div className="low_ft">
                                    <ul>
                                        <li>Developer APIs</li>
                                        <li>Contribute</li>
                                        <li>Chat(#blockscout)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className='d-flex justify-content-between align-items-center ftr_aft'>
                        <div>
                            <span>VirtualScan © 2023 (VRC-C)</span>
                        </div>
                        <div>
                            <i className='ftr_icon'> <BsGithub /> </i>
                            <i className='ftr_icon'> <AiOutlineTwitter /> </i>
                            <i className='ftr_icon'> <SiMinutemailer /> </i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer