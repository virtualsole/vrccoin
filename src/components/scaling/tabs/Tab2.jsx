import React from 'react'
import cube4 from "../../../assets/cube4.gif"
import { BsArrowUpRight } from 'react-icons/bs'
const Tab2 = () => {
  return (
    <section>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6">
            <img src={cube4} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 mt-lg-5 pt-lg-5">
            <h3 className='mt-5 text-light head_tab'>Supernets<span><a href="#" className='live_btn ms-2'>coming soon</a></span></h3>
            <p className="text-light tab1_pera">
              Build app-chains powered by an industry-leading technology and ecosystem around VRCScan
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
    </section>
  )
}

export default Tab2