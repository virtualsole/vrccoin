import React from 'react'
import etherum from "../../assets/etherum.png"
import fast from "../../assets/FastTransection-01.png"
import web3 from "../../assets/Web3.png"
import game from "../../assets/P23-01.png"
import metaverse from "../../assets/metaverse-01.png"
import proof from "../../assets/prrof of staking-01.png"
import "./benefit.css"
const data=[
    {
        image:fast,
        title:"Fast Transaction",
    },
    {
        image:etherum,
        title:"Low Transaction Fees",
    },
    {
        image:proof,
        heading:"",
        title:"Proof of Stake",
    },
    {
        image:metaverse,
        heading:"",
        title:"Metaverse",
    },
    {
        image:web3,
        heading:"",
        title:"Web 3.0",
    },
    {
        image:game,
        heading:"",
        title:"P2E Gaming",
    },
]

function Benefits() {
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-12'>
<h1 className='text-white text-center'>
    Why VRC Blockchain?
</h1>
<div className='row justify-content-around  mobile-responsive mt-5'>
    {
        data.map((data)=>{
            return(
                <>
                <div className='col-lg-5 col-md-8 col-sm-8 mt-3 mb-3 border-gradient card-responsive'>
                    <div className=''>
<div className='mt-5 mb-3'>
    <img src={data.image} className='img-fluid' alt='' width={"100px"}/>
</div>
                    <h6 className='text-white text-center text-heading'>
                        {data.heading}
                    </h6>
<h3 className='text-white text-center font-bold mb-5  text-title'>
    {data.title}
</h3>
                    </div>
    </div>
                </>
            )
        })
    }

</div>
            </div>

        </div>
      
    </div>
  )
}

export default Benefits
