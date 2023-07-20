import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from './Carousel'

import './news.css'
import CustomArrow from './CustomArrow'

const News = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className=''>
              <h2 className='news_head'>
                In the news
              </h2>
            </div>
            <div className="news_slider">
              <CustomArrow />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default News