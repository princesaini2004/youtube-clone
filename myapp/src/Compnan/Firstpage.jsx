import React from 'react'
import {
  Link
} from "react-router-dom";
function Firstpage() {
  return (
    <div>
      <div className="firstpage">
        <img id='img' src={require('./youtubepre.png')} alt="" />
        <h1>YouTube and YouTube Music ad-free, <br /> offline, and in the background</h1>
        <Link className='Premium' to='/premiumpage'>Get YouTube Premium</Link>
        <h2>Prepaid and subscription plans available. Prices start at <br /> ₹129.00/month. Free trials available with subscription plans only.</h2>
        <h4>Or save money with an <Link to='/'> annual, family or student plan</Link></h4>
        {/* <hr /> */}
        <Link className='Premium' to='/head'>Start For Free</Link> <br /><br /><br /><br /><br />
        <img className='preimages' src={require("./pre1.png")} alt="" />
        <img className='preimages' src={require("./pre2.png")} alt="" />
        <img className='preimages' src={require("./pre3.png")} alt="" />
        <img className='preimages' src={require("./pre4.png")} alt="" />
      </div>
    </div>
  )
}

export default Firstpage
