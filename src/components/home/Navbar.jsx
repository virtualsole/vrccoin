import React from "react";
import logo from "../../assets/vrc_logo.gif";
import "./style.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
const Navbar = () => {
  return (
    <>
      <div className="container ">
        <div className="row justify-content-between align-items-center mt-md-3">
          <div className="col-lg-4 col-md-12">
            <a className="navbar-brand mt-0" href="#">
              <img src={logo} className="img-fluid" alt="" width={"300px"} />
            </a>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="d-flex justify-content-around">
              <button className="btn-btn">WhitePaper</button>
              <button className="btn-btn" id="app-title">
                Ecosystem
              </button>
              <ReactTooltip
                anchorId="app-title"
                place="bottom"
                content="Coming Soon"
                style={{color:"white"}}
              />
              <button className="btn-btn">Build On VRCScan</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} className="img-fluid" alt="" width={"300px"} />
            </a>
            <div>
              <div className="navbar-nav gap-md-3 ms-auto">
                <button className="btn-btn">WhitePaper</button>
                <button className="btn-btn">Ecosystem</button>
                <button className="btn-btn">Build On VRCScan</button>
              </div>
            </div>
          </div>
        </nav>
      </div> */}
    </>

    // <nav class="navbar navbar-light">
    //   <div class="container">
    //     <a class="navbar-brand">
    //       <img className="app_logo img-fluid ms-lg-3 ms-0" src={logo} alt="" />
    //     </a>
    //     {/* <h1>Virtual Reality Coin</h1> */}
    //     <div className="d-flex gap-5 justify-content-end">
    //       <button className="btn-btn">WhitePaper</button>
    //       <button className="btn-btn">Ecosystem</button>

    //       <button className="btn-btn">Build On VRCScan</button>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
