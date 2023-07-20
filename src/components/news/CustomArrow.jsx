import React from 'react';
import Slider from 'react-slick';
import { Button, Card } from "react-bootstrap";
import pic1 from '../../assets/news1.png'
import pic2 from '../../assets/news2.png'
import pic3 from '../../assets/news3.png'
import pic4 from '../../assets/news4.png'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

import './news.css';

const CustomPrevArrow = ({ onClick }) => (
    <Button variant='secondary' className="custom-prev-arrow" onClick={onClick}>
        <span> <BsArrowLeftCircleFill className='crs_ico' /> </span>
    </Button>
);

const CustomNextArrow = ({ onClick }) => (
    <Button variant='secondary' className="custom-next-arrow" onClick={onClick}>
        <span> <BsArrowRightCircleFill className='crs_ico' /> </span>
    </Button>
);

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerPadding: "10px",
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const   CustomArrow = () => (
    <div>
        {/* <h1>React Slick Custom Arrows</h1> */}
        <Slider {...settings}>
            <div>
                <Card className="news_card ms-lg-3">
                    <Card.Img src={pic1} />
                    <Card.Body>
                        <div className="card_spans d-flex justify-content-between mb-5 ">
                            <span>July 10, 2023</span>
                            <span className="scnd_span">Community</span>
                        </div>
                        <div className="pera_cas">
                            Giving Web3 Game Devs More 'Shots on Goal' With Beamable
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div>
            <Card className="news_card ms-lg-3">
              <Card.Img src={pic2} />
              <Card.Body>
                <div className="card_spans d-flex justify-content-between mb-5">
                  <span>July 10, 2023</span>
                  <span className="scnd_span">Community</span>
                </div>
                <div className="pera_cas">
                  Giving Web3 Game Devs More 'Shots on Goal' With Beamable
                </div>
              </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="news_card ms-lg-3">
              <Card.Img src={pic3} />
              <Card.Body>
                <div className="card_spans d-flex justify-content-between mb-5">
                  <span>July 10, 2023</span>
                  <span className="scnd_span">Community</span>
                </div>
                <div className="pera_cas">
                  Giving Web3 Game Devs More 'Shots on Goal' With Beamable
                </div>
              </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="news_card ms-lg-3">
              <Card.Img src={pic2} />
              <Card.Body>
                <div className="card_spans d-flex justify-content-between mb-5">
                  <span>July 10, 2023</span>
                  <span className="scnd_span">Community</span>
                </div>
                <div className="pera_cas">
                  Giving Web3 Game Devs More 'Shots on Goal' With Beamable
                </div>
              </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="news_card ms-lg-3">
              <Card.Img src={pic3} />
              <Card.Body>
                <div className="card_spans d-flex justify-content-between mb-5">
                  <span>July 10, 2023</span>
                  <span className="scnd_span">Community</span>
                </div>
                <div className="pera_cas">
                  Giving Web3 Game Devs More 'Shots on Goal' With Beamable
                </div>
              </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="news_card ms-lg-3">
              <Card.Img src={pic4} />
              <Card.Body>
                <div className="card_spans d-flex justify-content-between mb-5">
                  <span>July 10, 2023</span>
                  <span className="scnd_span">Polygon Solutions</span>
                </div>
                <div className="pera_cas">
                  Giving Web3 Game Devs More 'Shots on Goal' With Beamable
                </div>
              </Card.Body>
            </Card>
            </div>
        </Slider>
    </div>
);

export default CustomArrow;
