import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'
import planet from '../../assets/planet.mp4'
import './Emissions.css'
const Emissions = () => {
  return (
   <section className='bg-emission'>
    
    <div className="container pt-5 mb-5">
    <h1 style={{color: '#fff', textAlign: "center"}}><strong>Virtual Coin (VRC)
</strong><br></br><strong>
Tokenomics</strong></h1>
<p className='text-center mt-1 text_para mb-0'>
The coin distribution of VRC is as follow:
</p>

{/* <button className="tab-btn-vrc text-center text-white mt-3 mb-5">
          
Read More
 <BsArrowUpRight className='mt-1 ms-2' />
      </button> */}
      
    </div>
    {/* <img className='mt-5 earth' src={earth}alt="" /> */}
    <video  autoPlay="autoplay" loop="loop" muted className="w-100 planet">
                <source src={planet} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
   </section>
  )
}

export default Emissions