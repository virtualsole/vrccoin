import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import PolyCards from "./PolyCards";
import "./styles/polycards.css";
const Header = () => {
  return (
    <div className="bg-home">
      <div className="container">
        <div className="row pt-5 justify-content-center align-items-center text-center">
          <div className="col-lg-12">
            {/* <button className='anounce'>
                            Announcing VRCSCAN 1.0
                            <AiOutlineArrowRight className='vrc_icon' />
                        </button> */}
            <h1 className="text-white mt-2  main-heading" data-aos="fade-up">
              A Scalable & Sustainable Revolutionary Blockchain Platform.
            </h1>
            <p className="text-paragraph text-white" data-aos="fade-up">
              The VRCScan is a Decentralized, Public Blockchain Led <br /> By a
              Global Developer Community.
            </p>
            {/* <PolyCards /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
