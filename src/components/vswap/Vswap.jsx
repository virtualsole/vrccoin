import React from "react";
import Svg from "../../assets/Hex.svg";
import SwapIcon from "../../assets/Swap.png";
import Nft from "../../assets/Nftlogo.png";
import Limit from "../../assets/LimitIcon-02.png";
import IfoIcon from "../../assets/IfoIcon-07.png";
import virtualBond from "../../assets/virtualBondIcon-09.png";
import VirtualLaunchPad from "../../assets/VirtualLaunchPad.png";
import haveranimation from "../../assets/haveranimation.mp4";
const data = [
  {
    icon: SwapIcon,
    title: "SWAP",
    heading: "Swap your Crypto with Low Transaction Fees",
  },
  {
    icon: Nft,
    title: "NFT MarketPlace",
    heading: "Sell & Create",
  },
  {
    icon: Limit,
    title: "Trade",
    heading: "Swaping, Spot Trading, Liquidity",
  },
  {
    icon: IfoIcon,
    title: "Earn",
    heading: "Framing, Pool",
  },

  {
    icon: virtualBond,
    title: "Virtual Bonds",
    heading: "Jackpot, Pottery",
  },
  {
    icon: VirtualLaunchPad,
    title: "LaunchPad",
    heading: "Earn Passive Income",
  },
];

function Vswap() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center alig-items-center">
        <div className="col-md-12">
          <h1 className="text-white text-start main-heading" data-aos="fade-up">
            Virtual Swap
          </h1>
          <h5 className="text-white text-start mt-3" data-aos="fade-up">
            World First DEX with Decentalized Spot Trading Platforms
          </h5>
          <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3  mt-5  align-items-center mobile-responsive">
            {data.map((data) => {
              return (
                <>
                  <div class="col">
                    <div class="p-3 card" data-aos="flip-up">
                      <div className="d-flex  align-items-center">
                        <div className="m-2">
                          <img
                            src={data.icon}
                            className="img-fluid"
                            width={"50px"}
                            height={"0px"}
                          />
                        </div>
                        <div className="mt-3">
                          <h6 className="text-white text-start text-heading">
                            {data.title}
                          </h6>
                          <p className="text-white text-start">
                            {data.heading}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="row justify-content-center align-items-center mt-5 mb-5 ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <video
                autoPlay="autoplay"
                loop="loop"
                muted
                className="w-100 planet"
              >
                <source src={haveranimation} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="p-3">
                <h6 className="text-white text-start" data-aos="fade-up">METAVERSE</h6>
                <h3 className="text-white text-start main-heading" data-aos="fade-up">
                  VRC The Metaverse
                </h3>
                <p className="text-white text-start text-paragraph" data-aos="fade-up">
                  VRC: Metaverse is a virtual reality space. Welcome to the VRC
                  metaverse, where fantasy and reality converge, and where
                  dreams have no limits. Embrace the power of the virtual realm
                  and be part of an ever-evolving narrative where humanity
                  explores, connects, and thrives in the boundless expanse of
                  the digital frontier.
                </p>
                <p className="text-white text-start text-paragraph" data-aos="fade-up">
                  Our Goal is to provide users with a new and exciting way to
                  earn passive income.
                </p>
                <p className="text-white text-start text-paragraph" data-aos="fade-up">
                  We are developing immersive experiences that will allow users
                  to explore & learn from, and interact with the VRC Universe in
                  unprecedented ways. s technology advances and creative minds
                  unite, the metaverse becomes a powerful tool for
                  problem-solving, research, and unlocking new frontiers of
                  innovation. Empower your Metaverse journey with us.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center  mt-5">
            <div className="col-md-12 card card-responsive">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 ">
                  <div className="p-3">
                    <h1 className="text-white text-start main-heading" data-aos="fade-up">
                      Audited by HACKEN
                    </h1>
                    <p className="text-white text-start mt-2 text-paragraph" data-aos="fade-up">
                      Hacken is a blockchain security auditor with years of
                      experience, hundreds of blockchain partners, and thousands
                      of secured crypto projects. Hacken protects our
                      technological businesses and crypto community worldwide
                      with the most competitive suite of professional
                      cybersecurity services. So, our Platforms will allow users
                      to access our upcoming Smart contract and additional tools
                      to make navigating the crypto world simple,
                      reliable & secure.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="p-3" data-aos="fade-up">
                    <div className="text-center">
                      <img src={Svg} className="img-fluid" alt="" />
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <button className="btn btn-btn">Audit Report</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vswap;
