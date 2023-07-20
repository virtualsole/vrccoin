import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import CountUp, { useCountUp } from 'react-countup';
import './ecosystem.css'

const Ecosystem = () => {
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });
    return (
        <>
            <Container className='ecosystem mt-5 mb-5'>
                <Row>
                    <div className="eco_head mb-5">
                        <h1>The largest and most thriving ecosystem</h1>
                    </div>
                    <Col>
                        {/* Ecosystem Cards */}
                        <div className="eco_cards d-flex gap-3">
                            {/* Left Cards */}
                            <div className="ecco_lft_crds crd d-flex flex-column gap-3">
                                {/* Left Card 1 */}
                                <Card className='eco_crd'>
                                    <div className='eco_crd_dv'>
                                    <CountUp className='text-white fs-2' end={294390} enableScrollSpy />
                                        <p>Total Contract Creators</p>
                                    </div>
                                </Card>
                                {/* Left Card 2 */}
                                <Card className='eco_crd'>
                                    <div className='eco_crd_dv'>
                                    <CountUp className='text-white fs-2' end={13620090} enableScrollSpy />
                                       
                                        <p>NFT Sales Volume</p>
                                    </div>
                                </Card>
                            </div>
                            {/* Middle Cards */}
                            <div className="ecco_mid_crds crd mt-md-5 d-flex flex-column gap-3">
                                {/* Middle Card 1 */}
                                <Card className='eco_crd'>
                                    <div className='eco_crd_dv'>
                                    <CountUp className='text-white fs-2' end={136200290} enableScrollSpy />
                                        <p>Unique Addresses</p>
                                    </div>
                                </Card>
                                {/* Middle Card 2 */}
                                <Card className='eco_crd'>
                                    <div className='eco_crd_dv'>
                                    <CountUp className='text-white fs-2' end={18} enableScrollSpy />
                                        <p>Avg. Cost per txn</p>
                                    </div>
                                </Card>
                            </div>
                            {/* Right Cards */}
                            <div className="ecco_rt_crds crd d-flex flex-column gap-3">
                                {/* Right Card 1 */}
                                <Card className='eco_crd'>
                                    <div className='eco_crd_dv'>
                                    <CountUp className='text-white fs-2' end={13900} enableScrollSpy />
                                        <p>Transactions</p>
                                    </div>
                                </Card>
                                {/* Right Card 2 */}
                                <Card className='eco_crd'>
                                    <div className='eco_crd_dv'>
                                    <CountUp className='text-white fs-2' end={89021} enableScrollSpy />
                                        <p>Deployed Smart Contracts</p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Ecosystem