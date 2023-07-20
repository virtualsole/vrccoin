import React from 'react'
import scroller from '../../assets/648af5e9dd4bd8e86d42ac82_p2-ann-date-dot.svg'
import './ResponsiveDates.css'
const ResponsiveDates = () => {
    return (
        <section className='Dates_bodys'>
            <h1 className='dates_heads mt-3 mb-3'>Important Dates</h1>
            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-12 mb-5">
                        <img className='mt-4 ms-5 scrols' src={scroller} alt="" />
                        <span className='bars'>------------------------------------</span>

                        <div className="border2 d-block mb-5">
                            <div>
                                <span className='word1 d-block'>WEEK OF</span>
                                <h1 className='word2 d-block'>19</h1>
                                <span className='word3 d-block'>JUNE     2023</span>

                                <span className='text-light'>VRCScan PoS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className="container-fluid mt-5 ">
                <div className="row mt-5 mb-5">
                    <div className="col-12 mt-5 mb-5">
                        <img className='mt-5 ms-5 scrols' src={scroller} alt="" />
                        <span className='barst'>----------------------------------------------------</span>

                        <div className="border2 d-block mt-5 mb-5">
                            <div>
                                <span className='word1 d-block'>WEEK OF</span>
                                <h1 className='word2 d-block'>26</h1>
                                <span className='word3 d-block'>JUNE     2023</span>

                                <span className='text-light'>Architecture and Stack</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>

            <div style={{ marginTop: "180px" }}>
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-12 mb-5">
                            <img className='mt-4 ms-5 scrols' src={scroller} alt="" />
                            <span className='bars'>------------------------------------</span>

                            <div className="border2 d-block mb-5">
                                <div>
                                    <span className='word1 d-block'>WEEK OF</span>
                                    <h1 className='word2 d-block'>19</h1>
                                    <span className='word3 d-block'>JUNE     2023</span>

                                    <span className='text-light'>VRCScan PoS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <div className="container-fluid mt-5 ">
                    <div className="row mt-5 mb-5">
                        <div className="col-12 mt-5 mb-5">
                            <img className='mt-5 ms-5 scrols' src={scroller} alt="" />


                            <div className="border2 d-block mt-5 mb-5">
                                <div>
                                    <span className='word1 d-block'>WEEK OF</span>
                                    <h1 className='word2 d-block'>26</h1>
                                    <span className='word3 d-block'>JUNE     2023</span>

                                    <span className='text-light'>Architecture and Stack</span>
                                </div>
                            </div>
                        </div>
                    </div>
               
                </div>
            </div>
        </section>
    )
}

export default ResponsiveDates
