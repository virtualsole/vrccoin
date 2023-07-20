import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import pic1 from '../../assets/news1.png'
import pic2 from '../../assets/news2.png'
import pic3 from '../../assets/news3.png'
import pic4 from '../../assets/news4.png'

import './news.css'

export default class CenterMode extends Component {

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 500,
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
          breakpoint: 600,
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
    return (
      <div>
        <Slider {...settings} className="slider_news">
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
              <Card.Img src={pic4} />
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
              <Card.Img src={pic1} />
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
  }
}