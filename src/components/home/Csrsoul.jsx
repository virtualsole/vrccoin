import React from "react";
import Carousel from "react-bootstrap/Carousel";
import screen1 from "../../assets/gif video v4.mp4";
import screen5 from "../../assets/hollograme.mp4";

import screen2 from "../../assets/Render2.gif";
import screen3 from "../../assets/ezgif.com-video-to-gif3.gif";
import { BsArrowUpRight } from "react-icons/bs";
import { PiStarFourLight } from "react-icons/pi";
import "./styles/carsoul.css";
const Csrsoul = () => {
  return (
    <div className="bg_clr">
      <div className="container mt-5 pt-lg-5 pt-0">
        <div className="row">
          {/* <div className="col-12">
            <img src={screen2} className="img-fluid rounded"></img>
          </div> */}
        </div>
        <div className="row respon align-items-center mt-5">
          <div className="col-12 mb-5 gap-3 d-lg-flex d-block align-items-center">
            <div className="col-lg-6 col-12">
              <h1
                className="text-white text-start main-heading"
                data-aos="fade-up"
              >
                What is VRC Coin?
              </h1>
              <h6
                className=" text-start text-paragraph"
                style={{ color: "#01B6FF" }}
                data-aos="fade-up"
              >
                <strong>The Cryptocurrency of Payments</strong>
              </h6>
              <p
                className="text-white text-start text-paragraph"
                data-aos="fade-up"
              >
                VRC coin is a Native cryptocurrency of VRC Blockchain with the
                massive ecosystem and advance Blockchain features such as:
                <ul className="text-paragraph" data-aos="fade-up">
                  <li>Web3.0</li>
                  <li>Metaverse </li>
                  <li>Smart contracts</li>
                  <li>High security</li>
                  <li>High transaction speed</li>
                  <li>NFT Platform Compatibility </li>
                </ul>
                VRC coin uses the Proof-of-stake (POS) consensus algorithm where
                validators stake their VRC as collateral for earning rewards in
                shape of VRC coin.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <video
                autoPlay="autoplay"
                loop="loop"
                muted
                className="w-100 planet"
                data-aos="fade-up"
              >
                <source src={screen5} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        {/* <div className="row respon align-items-center">
        <div className="col-12 gap-3 d-lg-flex d-block align-items-center">
            <div className="col-lg-6 col-12">
              <h1 className="text-white text-start">Why VRC Blockchain?</h1>
              <p className="text-white text-start">
                Blockchain is a public database that is updated and shared
                across a network of computers. The term "Block" refers to data.
                To be successful when transferring VRC to someone else, the
                transaction information must be appended to a block. The term
                "Chain" refers to how the blocks are linked together. And the
                computers are referred to as "Nodes" because they ensure that
                everyone who interacts with the Blockchain has the same data.
                Blockchains require a consensus mechanism to accomplish this
                distributed agreement.
              </p>
              <p className="text-white text-start">
                VRC is a revolutionary Blockchain platform that is built for
                efficiency, speed, reliability and security. VRC scan is 3rd
                generation Blockchain Triple-Layered model with high speed
                transactions and ultra-secure smart contracts. VRC Blockchain is
                designed specially for payment solutions & provide model for
                worldwide business that will allow anyone to exchange & create
                value. The most important Feature of VRC blockchain is low
                transaction fees and high transaction speed.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <video
                autoPlay="autoplay"
                loop="loop"
                muted
                className="w-100 planet"
              >
                <source src={screen1} type="video/mp4" />
              </video>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Csrsoul;
