import React from "react";
import SliderVideo from "../../assets/web banner video.mp4";

function Slider() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <video autoPlay="autoplay" loop="loop" muted className="w-100 ">
            <source src={SliderVideo} type="video/mp4" className="border" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Slider;
