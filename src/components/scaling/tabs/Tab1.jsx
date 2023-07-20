import React from 'react'
import cube from "../../../assets/cube.gif"
import cube2 from "../../../assets/cube2.gif"
import cube3 from "../../../assets/cube3.gif"
import {BsArrowUpRight} from 'react-icons/bs'
const Tab1 = () => {
  return (
    <section>
  <div className="container mb-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={cube} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 mt-lg-5 pt-lg-5">
          <h3 className='mt-5 text-light head_tab'>VRCScan PoS <span><a href="#" className='live_btn'>Live</a></span></h3>
          <p className="text-light tab1_pera">
          Support the most widely used Ethereum scaling ecosystem that offers EVM compatibility and an ultimate user experience with fast transactions at near-zero gas fees today.
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
  <div className="container mb-5">
      <div className="row">
      <div className="col-lg-6 mt-lg-5 pt-lg-5">
          <h3 className='mt-5 text-light head_tab'>VRCScan zkEVM <span><a href="#" className='live_btn'>COMING SOON</a></span></h3>
          <p className="text-light tab1_pera">
         
Unlock Ethereum scalability while maintaining security with the first ZK-rollup that offers EVM equivalence with fast transactions at near-zero gas cost today.
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
        <div className="col-lg-6">
          <img src={cube2} alt="" className="img-fluid" />
        </div>
       
      </div>
    </div>
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={cube3} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 mt-lg-5 pt-lg-5">
          <h3 className='mt-5 text-light head_tab'>VRCScan Miden  <span><a href="#" className='live_btn'>coming soon</a></span></h3>
          <p className="text-light tab1_pera">
          
Build advanced dApps with client-side proving with the first decentralized rollup that leverages execution proofs of concurrent, local transactions.
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

export default Tab1

