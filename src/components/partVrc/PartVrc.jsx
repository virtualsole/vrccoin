import React from "react";
import "./part.css";
import CountUp, { useCountUp } from "react-countup";
function PartVrc() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 ">
          <h3 className="text-white text-start main-heading" data-aos="fade-up">
            Be part of VRC Blockchain
          </h3>
        </div>
        <div className="row justify-content-center align-items-center part-card  card-responsive mt-5">
          <div className="col-lg-6 col-md-12 ">
            <div className="p-3">
              <h3 className="text-white text-start" data-aos="fade-up">
                Join VRC Community
              </h3>
              <p
                className="text-white text-start text-paragraph"
                data-aos="fade-up"
              >
                Ask questions, share ideas and participate in breakfasts, hubs,
                local events with people who love VRC.
              </p>
              <div className="text-start">
                <button className="btn btn-jion">Join Our Channel</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="p-3" data-aos="fade-up">
              <div className="">
                <h5 className="text-center text-white">
                  <CountUp
                    className="text-white bg-primary p-3 text-count"
                    end={2943930}
                    enableScrollSpy
                  />
                </h5>
              </div>
              <div>
                <h6 className="text-white mt-4"> Total community members</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartVrc;
