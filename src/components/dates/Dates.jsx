import React from 'react'
import scroller from '../../assets/648af5e9dd4bd8e86d42ac82_p2-ann-date-dot.svg'
import './Dates.css'
const Dates = () => {
  return (
    <section className='Dates_body'>
         <h1 className='dates_head mt-3 mb-3'>Important Dates</h1>
    <div className="container">
        <div className="row">
           
            <div className="col-lg-12 col-sm-6  border dates-back back_img">
               
                        <div className="d-flex mt-4">
                            <div className="col-lg-3 col-sm-2 text-light mt-5  smallScreen">
                                <span className='word1'>WEEK OF</span>
                                <h1 className='word2'>19</h1>
                                <span className='word3 ms-lg-4'>JUNE     2023</span>
                                <br></br>
                                <img className='mt-4 ms-5 scrol' src={scroller} alt="" />
                                <span className='ms-1 bar'>---------------------------------------</span>
                                <br></br>
                                <br></br>
                          
                                <span className='text-light'>VRCScan PoS</span>
                            </div>
                            <div className="col-lg-3 col-sm-2 text-light mt-5 smallScreen">    <span className='word1'>WEEK OF</span>
                                <h1 className='word2'>26</h1>
                                <span className='word3 ms-lg-4'>JUNE     2023</span>
                                <br></br>
                                <img className='mt-4 ms-5 scrol' src={scroller} alt="" />
                                <span className='ms-1 bar'>---------------------------------------</span>
                                <br></br>
                                <br></br>
                          
                                <span className='text-light'>Architecture and Stack</span>
                                </div>
                            <div className="col-lg-3 col-sm-2 text-light mt-5 smallScreen">
                            <span className='word1'>WEEK OF</span>
                                <h1 className='word2'>10</h1>
                                <span className='word3 ms-lg-4'>JUNE     2023</span>
                                <br></br>
                                <img className='mt-4 ms-5 scrol' src={scroller} alt="" />
                                <span className='ms-1 bar'>-----------------------<span className='dash_tab'>----------<span className=''>------</span></span></span>
                                <br></br>
                                <br></br>
                          
                                <span className='text-light'>Tokenomics</span>
                            </div>
                            <div className="col-lg-3 col-sm-2 text-light mt-5 smallScreen">
                                
                            <span className='word1'>WEEK OF</span>
                                <h1 className='word2'>17</h1>
                                <span className='word3 ms-lg-4'>JUNE     2023</span>
                                <br></br>
                                <img className='mt-4 ms-5 scrol' src={scroller} alt="" />
                                <br></br>
                                <br></br>
                          
                                <span className='text-light'>Governance</span>
                                {/* <span className='ms-3 bar'>---------------------</span>  */}
                            </div>
                        </div>
                
            </div>
        </div>
    </div>
    </section>
  )
}

export default Dates