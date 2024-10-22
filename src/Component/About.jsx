import React, { Component } from "react";
import "./About.css";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdBusinessCenter } from "react-icons/md";
import cv from '../media/ahsan-cv.pdf'


export default class About extends Component {
  render() {
    function downloadcv(){
      const x= document.createElement('a')
      x.href=cv;
      x.download="Ahsan-cv.pdf"
      document.body.appendChild(x)
      x.click()
      document.body.removeChild(x)
  
    }
    return (
      <div className="about1">
        {/* Heading */}
        <div className="abouthead">
          <h1 className="backtext">RESUME</h1>
          <h1 className="fronttext">
            ABOUT
            <span className="me">ME</span>
          </h1>
        </div>
        {/* basic Info and 4 cards for satisfaction */}
        <div className="infocontain">
        <div className="row container ">
          {/* Information about me */}
          <div className="col-12 col-lg-6">
            <h3>PERSONAL INFOS</h3>
            <div className="row info1">
              <div className="col-6 " >
                <p>
                  First Name: <span className="info">Muhammad</span>
                </p>
                <p>
                  Age: <span className="info">22 Years</span>
                </p>
                <p>
                  FreeLance: <span className="info">Available</span>
                </p>
                <p>
                  Phone: <span className="info">+92 300 0470531</span>
                </p>
                <p>
                  Whatsapp: <span className="info">+92 300 0470531</span>
                </p>
              </div>
              <div className="col-6">
                <p>
                  Last Name: <span className="info">Ahsan</span>
                </p>
                <p>
                  Nationality: <span className="info">Pakistan</span>
                </p>
                <p>
                  Address: <span className="info">Mailsi, Vehari</span>
                </p>
                <p>
                  Email: <span className="info">2020n05210@gmail.com</span>
                </p>
                <p>
                  Languages: <span className="info">English, Urdu</span>
                </p>
              </div>


              <div className="col-12">

              <div className="button m-3">
                <button className="aboutbtn" onClick={downloadcv}>DOWNLOAD CV</button>
                <Link className="about"  onClick={downloadcv}><FaDownload/></Link>
            </div>
              </div>

              
              
              </div>
            
          </div>
          {/* 4 cards */}
          <div className="col-12 col-lg-6">
            <div className="row">


              <div className="col-6">
                <div className="card p-3 mb-3">
                  <h1>
                    12<sup>+</sup>{" "}
                  </h1>
                  <p>
                    Years of <br /> Experience
                  </p>
                </div>
                <div className="card p-3">
                  <h1>
                    97<sup>+</sup>{" "}
                  </h1>
                  <p>
                    Completed <br /> Projects
                  </p>
                </div>
              </div>


              <div className="col-6">
                <div className="card p-3 mb-3" >
                  <h1>
                    81<sup>+</sup>{" "}
                  </h1>
                  <p>
                    Happy <br /> Customers
                  </p>
                </div>
                <div className="card p-3">
                  <h1>
                    53<sup>+</sup>{" "}
                  </h1>
                  <p>
                    Awards <br /> Won
                  </p>
                </div>
              </div>
             
            </div>
          </div>

          
        </div>
        </div>
      

        {/* Progress Circles */}
      <div className="progres py-5 container">
        <h2 >My Skills</h2>
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3 circlecontain">
              <div className="circle" style={{ '--conic-percentage': '25%' }}>
                <p>25%</p>
              </div>
              <p>HTML</p>
          </div>
          
          <div className="col-6 col-md-4 col-lg-3 circlecontain">
              <div className="circle" style={{ '--conic-percentage': '89%' }}>
                <p>89%</p>
              </div>
              <p>JAVASCRIPT</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 circlecontain">
              <div className="circle" style={{ '--conic-percentage': '70%' }}>
                <p>70%</p>
              </div>
              <p>CSS</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 circlecontain">
              <div className="circle" style={{ '--conic-percentage': '66%' }}>
                <p>66%</p>
              </div>
              <p>PHP</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 circlecontain">
              <div className="circle" style={{ '--conic-percentage': '95%' }}>
                <p>95%</p>
              </div>
              <p>WORDPRESS</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 circlecontain">
              <div className="circle" style={{ '--conic-percentage': "50%" }}>
                <p>50%</p>
              </div>
              <p>JQUERY</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 circlecontain">
              <div className="circle" style={{ '--conic-percentage': '65%' }}>
                <p>65%</p>
              </div>
              <p>ANGULAR</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 circlecontain">
              <div className="circle" style={{ '--conic-percentage': '45%' }}>
                <p>45%</p>
              </div>
              <p>REACT</p>
          </div>

        </div>
      </div>


      {/* Experience and Education */}
      <div className="experience container px-5 py-3">
        <h2 style={{textAlign:"center"}}>Experience & Education</h2>
        <div className="row  exp1">
          <div className="exp-1 col-12 col-md-6 mb-5">
            <p className="badge">2018-Present</p>
            <h4>Web Developer <span className="expspan">- Envato</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, officiis quia.</p>
            <div className="expicon">
            <MdBusinessCenter />
            </div>
          </div>
          <div className="exp-1 col-12 col-md-6 mb-5">
            <p className="badge">2015</p>
            <h4>Matriculation <span className="expspan">- Envato</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, officiis quia.</p>
            <div className="expicon">
            <MdBusinessCenter />
            </div>
          </div>
          <div className="exp-1 col-12 col-md-6 mb-5">
            <p className="badge">2018-Present</p>
            <h4>Web Developer <span className="expspan">- Envato</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, officiis quia.</p>
            <div className="expicon">
            <MdBusinessCenter />
            </div>
          </div>
          <div className="exp-1 col-12 col-md-6 mb-5">
            <p className="badge">2018-Present</p>
            <h4>Web Developer <span className="expspan">- Envato</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, officiis quia.</p>
            <div className="expicon">
            <MdBusinessCenter />
            </div>
          </div>
          <div className="exp-1 col-12 col-md-6">
            <p className="badge">2018-Present</p>
            <h4>Web Developer <span className="expspan">- Envato</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, officiis quia.</p>

            <div className="expicon">
            <MdBusinessCenter />
            </div>
          </div>
          <div className="exp-1 col-12 col-md-6">
            <p className="badge">2018-Present</p>
            <h4>Web Developer <span className="expspan">- Envato</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, officiis quia.</p>
            <div className="expicon">
            <MdBusinessCenter />
            </div>
          </div>

      
        </div>
      </div>
      </div>
    );
  }
}
