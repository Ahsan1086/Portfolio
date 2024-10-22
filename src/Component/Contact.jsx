import React, { Component } from "react";
import './Contact.css'
import { FaMap } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BsBrowserChrome } from "react-icons/bs";

import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";


export default class Contact extends Component {
  render() {
    return (
      <div className="contact ">
        <div className="contacthead py-5">
          <h1 className="back">CONTACT</h1>
          <h1 className="front">
            GET IN
            <span className="touch">TOUCH</span>
          </h1>
        </div>


      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <h3 style={{color:"var(--whitesilver)"}}>DON'T BE SHY</h3>
            <p style={{color:"var(--whitesilver)"}}>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>


            <div className="row pt-4">
              <div className="col-2">
              <FaMap style={{fontSize:"40px",color:"#ffb400"}}/>
              </div>
              <div className="col-9 gap-0" style={{color:"var(--whitesilver)"}}>
              <p style={{fontSize:"15px",textTransform:"uppercase",padding:"0px", margin: "0px"}}>Address Point</p>
              <p className="" style={{fontSize:"15px",padding:"0px",fontWeight:"bold", margin: "0px"}}>123 Stree New York City , United States Of America 750065.</p>
              </div>
              
            </div>
            <div className="row pt-4" style={{color:"var(--whitesilver)"}}>
              <div className="col-2">
              <FaEnvelopeOpen style={{fontSize:"40px",color:"#ffb400",}}/>
              </div>
              <div className="col-9 gy-0">
              <p  style={{fontSize:"17px",textTransform:"uppercase",padding:"0px", margin: "0px"}}>mail me</p>
              <p style={{fontSize:"15px",padding:"0px", margin: "0px",fontWeight:"bold",}}>ahsan@gmail.com </p>
              </div>
              
            </div>
            <div className="row pt-4"  style={{color:"var(--whitesilver)"}}>
              <div className="col-2">
              <FaPhoneSquareAlt style={{fontSize:"40px",color:"#ffb400",}}/>
              </div>
              <div className="col-9 gy-0">
              <p  style={{fontSize:"20px",textTransform:"uppercase",padding:"0px", margin: "0px"}}>call me</p>
              <p  style={{fontSize:"15px",padding:"0px", margin: "0px",fontWeight:"bold",}}>+123 123 123 </p>
              </div>
              
            </div>
            <div className="links py-4">
              <a href=""><FaFacebookF/></a>
              <a href=""><FaTwitter/></a>
              <a href=""><TfiYoutube/></a>
              <a href=""><BsBrowserChrome/></a>
            </div>


          </div>


{/* Form */}
          <div className="col-12 col-lg-8 px-5">
          <form class="row">

            <div class="col-md-6 pt-4">
              <input type="text"  placeholder="YOUR NAME" required/>
            </div>

            <div class="col-md-6 pt-4">
              <input type="email"  placeholder="YOUR EMAIL" required/>
            </div>

            <div class="col-12 pt-4">
              <input type="text" class="" placeholder="YOUR SUBJECT" required/>
            </div>

            <div class="col-12 pt-4">
            <textarea placeholder="Your Message" rows={7}  required style={{color:"var(--whitesilver)"}} />
            </div>

            
            <div className="col-12 mt-3">
            <div className="button">
                <button className="aboutbtn" type="
                submit">MORE ABOUT ME</button>
                <Link className="about"><FaTelegramPlane/></Link>
            </div>
            </div>
  
</form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
