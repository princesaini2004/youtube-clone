import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
function Header() {
    const [status, setstatus] = useState(false);
    return (
        <div>
            {
                status &&
                <div className="toggle2">
                    <div className="toggle1">
                        <div className="togg1">
                            <button className='button tou' onClick={() => setstatus(false)} ><i class="fa-solid fa-bars"></i></button>
                            <img id='toggimg' src={require("../Assets/logo.png")} alt="" />
                        </div>
                        <div className="togg2">
                            <Link to="/" className='link2' ><i class="fa-solid fa-house fa-lg"></i> Home</Link>
                            <Link to="/" className='link2' ><i class="fa-brands fa-square-youtube"></i> Shorts</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-inbox"></i> Subscriptions</Link>
                            <div className="hr"></div>
                            <Link to="/" className='link2' >You </Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-clock-rotate-left fa-lg"></i> History</Link>
                            <Link to="/" className='link2' ><i class="fa-regular fa-clock fa-lg"></i> Watch Later</Link>
                            <Link to="/" className='link2' ><i class="fa-regular fa-thumbs-up fa-lg"></i> Liked Video</Link>
                            <div className="hr"></div>
                            <Link to="/" className='link2' >Subscriptions</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-user fa-lg"></i> Shradha Khapra</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-circle-plus fa-lg"></i> Browse Channels</Link>
                            <div className="hr"></div>
                            <Link to="/" className='link2' >Explore</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-fire fa-lg"></i> Trending</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-bag-shopping fa-lg"></i> Shopping</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-music fa-lg"></i> Music</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-clapperboard fa-lg"></i> Movies</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-wifi fa-lg"></i> Live</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-gamepad fa-lg"></i> Gaming</Link>
                            <Link to="/" className='link2' ><i class="fa-regular fa-newspaper fa-lg"></i> News</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-trophy fa-lg"></i> Sports</Link>
                            <Link to="/" className='link2' ><i class="fa-regular fa-lightbulb fa-lg"></i> Learning</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-shirt fa-lg"></i> Fashion & Beauty</Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-podcast fa-lg"></i> Prodcasts</Link>
                            <div className="hr"></div>
                            <Link to="/" className='link2' >More from Youtube</Link>
                            <Link to="/" className='link2' ><i class=" color fa-brands fa-youtube fa-lg"></i> YouTube Premium</Link>
                            <Link to="/" className='link2' ><i class=" color fa-brands fa-square-youtube fa-lg"></i> YouTube Music</Link>
                            <Link to="/" className='link2' ><i class=" color fa-brands fa-youtube fa-lg"></i> YouTube Kids</Link>
                            <div className="hr"></div>
                            <Link to="/" className='link2' ><i class="fa-solid fa-gear fa-lg"></i> Settings</Link>
                            <Link to="/" className='link2' ><i class="fa-regular fa-flag fa-lg"></i>Report History </Link>
                            <Link to="/" className='link2' ><i class="fa-solid fa-question fa-lg"></i> Help</Link>
                            <Link to="/" className='link2' ><i class="fa-regular fa-message fa-lg"></i> Send feedback</Link>
                            <div className="hr"></div>
                            <Link to="/" className='link2 font' >About Press Copyright <br /> Contact Us Creators  <br />Advertise Developer</Link>
                            <Link to="/" className='link2 font' >Terms Privacy Policy & Safety <br /> How YouTube Works  <br />Teast New Features</Link>
                        </div>
                    </div>
                    <div className="toggle3"></div>
                    {/* <Link className="toggle3" to='/css'></Link> */}
                </div>


            }
            <div className="header">
                <div className="head">
                    <div className="dir">
                        <button to='/' className='button tou' id='togg' onClick={() => setstatus(true)}><i class="fa-solid fa-bars"></i></button>
                        <Link to='/home' className='button'><i class="fa-solid fa-house"></i><p>Home </p></Link>
                        <Link to='/' className='button'><i class="fa-brands fa-square-youtube"></i><p>Shorts</p></Link>
                        <Link to='/' className='button'><i class="fa-solid fa-inbox"></i><p>Subscriptions</p></Link>
                        <Link to='/' className='button'><i class="fa-solid fa-repeat"></i><p>You</p></Link>
                    </div>
                    <img src={require("../Assets/logo.png")} alt="" />
                </div>
                <div className="head"><input type="search" name="" id="search" placeholder='Search' /> <button id='micro'><i class="fa-solid fa-microphone"></i></button></div>
                <div className="head">
                    <i class="fa-solid fa-video icon"></i>
                    <i class="fa-regular fa-bell icon"></i>
                    <Link to='loginpage'>
                    <i class="fa-regular fa-user icon"></i>
                    </Link>
                </div>

            </div>
            <div className="links">
                <Link to="/home" id='col' className='link'>All</Link>
                <Link to="/js" className='link'>JavaScript</Link>
                <Link to="/css" className='link'>css</Link>
                <Link to="/coding" className='link'>Coding</Link>
                <Link to="/Game" className='link'>Gaming</Link>
                <Link to="/home" className='link'>WebPage</Link>
                <Link to="/home" className='link'>Comedy</Link>
                <Link to="/home" className='link'>Tests</Link>
                <Link to="/home" className='link'>CivilServicesExam</Link>
                <Link to="/home" className='link'>Computer</Link>
                <Link to="/home" className='link'>Datascience</Link>
                <Link to="/home" className='link'>Music</Link>
                <Link to="/home" className='link'>Live</Link>
                <Link to="/home" className='link'>News</Link>
                <Link to="/home" className='link'>Sales</Link>
                <Link to="/home" className='link'>Sales</Link>
                <Link to="/home" className='link'>Sales</Link>
                <Link to="/home" className='link'>Sales</Link>
                <Link to="/home" className='link'>Sales</Link>
                <Link to="/home" className='link'>Sales</Link>
            </div>
        </div>
    )
}

export default Header

