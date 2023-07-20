import React from 'react'
import cube5 from "../../../assets/cube5.gif"
import { BsArrowUpRight } from 'react-icons/bs'
const Tab3 = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={cube5} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 mt-lg-5 pt-lg-5">
          <h3 className='mt-5 text-light head_tab'>VRCScan ID<span><a href="#" className='live_btn ms-2'>live</a></span></h3>
          <p className="text-light tab1_pera">
            Build trusted and secure relationships between users and dApps, following the principles of self sovereign identity and privacy by default.
          </p>
          <div className="d-flex">
            <button className="tab-btn-vrc d-flex text-white">
              Open Docs
              <BsArrowUpRight className='mt-1 ms-2' />
            </button>
            <button className="tab2-btn-vrc d-flex text-white ms-3">
              Learn More <BsArrowUpRight className='mt-1 ms-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab3
