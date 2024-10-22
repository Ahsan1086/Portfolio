import React from "react";
import ahsan from "./147066-1635479088.jpg";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import About from "./About";

export default function Home() {
  return (
    <div className="home">
      <div className="yellow"></div>
      <div className="row py-3 container d-flex">


        <div className="col-12 col-lg-4 image align-items-stretch" >
          <img src={ahsan} alt="" />
          {/* style={{backgroundImage:`url(${ahsan})`}} */}
        </div>

        <div className="col-12 col-lg-8 hometext align-items-stretch">

          
            <div className="bar"></div>
            <div className="heading">
              <h1 className="name">
                MUHAMMAD AHSAN.
              </h1>
              <h1 className="profession">
                WEB DEVELOPER
              </h1>
            </div>

            <p className="details">Lorem ipsum dolor sit amet, con quasi, harum unde quos in numquam expedita officia. Totam enimiciendis eligendi officia explicabo alias, soluta iste possimus illum eaque dolorem mollitia eveniet, accusantium, blanditiis omnis!</p>
            {/* <button>MORE ABOUT ME <span></span></button> */}
            
            <div className="button">
                <button className="aboutbtn"  data-bs-toggle="modal" data-bs-target="#aboutmodal">MORE ABOUT ME</button>
                <Link className="about"  data-bs-toggle="modal" data-bs-target="#aboutmodal"><FaArrowRight/></Link>
            </div>

            <div class="modal fade" id="aboutmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <About/>
      </div>
      </div>
    </div>
          </div>


        
      </div>
    </div>
  );
}
