import React, { useState } from "react";
import "./Portfolio.css";
import img1 from "../media/project-1.jpg";
import img2 from "../media/project-2.jpg";
import img3 from "../media/project-3.jpg";
import img4 from "../media/project-4.jpg";
import img5 from "../media/project-5.jpg";
import img6 from "../media/project-6.jpg";
import img7 from "../media/project-7.jpg";
import img8 from "../media/project-8.jpg";
import img9 from "../media/project-9.jpg";
import { GrDocumentText } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";




const gallery = [
  {
    label: "ALL",
    acat: "all",
    id: 1,
    category: ["all", "mockup"],
    src: img1,
    area: "a1",
    text: "MOCKUP PROJECT",

    target: "Modal1",
    h1: "Mockup Project",
    Project: "Website",
    Client: "Ahsan",
    Languages: "JS,React",
    Preview: "www.ahsan.com",
  },
  {
    label: "LOGO",
    acat: "logo",
    id: 2,
    category: ["all", "video"],
    src: img2,
    area: "a2",
    text: "YOUTUBE PROJECT",

    target: "Modal2",
    h1: "Mockup Project",
    Project: "Website",
    Client: "Modal2",
    Languages: "JS,React",
    Preview: "www.mohsin.com",
  },
  {
    label: "VIDEO",
    acat: "video",
    id: 3,
    category: ["all"],
    src: img3,
    area: "a3",
    text: "SLIDER PROJECT",

    target: "Modal3",
    h1: "Mockup Project",
    Project: "Website",
    Client: "Modal3",
    Languages: "JS,React",
    Preview: "www.mohsin.com",
  },
  {
    label: "GRAPHIC",
    acat: "graphic",
    id: 4,
    category: ["all", "logo", "video"],
    src: img4,
    area: "a4",
    text: "LOCAL PROJECT",

    target: "Modal4",
    h1: "Mockup Project",
    Project: "Website",
    Client: "Modal4",
    Languages: "JS,React",
    Preview: "www.mohsin.com",
  },
  {
    label: "MOCKUP",
    acat: "mockup",
    id: 5,
    category: ["all", "logo"],
    src: img5,
    text: "SAAS PROJECT",

    target: "Modal5",
    h1: "Mockup Project",
    Project: "Website",
    Client: "Modal5",
    Languages: "JS,React",
    Preview: "www.mohsin.com",
  },
  {
    id: 6,
    category: ["all", "logo", "mockup"],
    src: img6,
    text: "MOCKUP PROJECT",

    target: "Modal6",
    h1: "Mockup Project",
    Project: "Website",
    Client: "Modal6",
    Languages: "JS,React",
    Preview: "www.mohsin.com",
  },
  {
    id: 7,
    category: ["all", "logo"],
    src: img7,
    text: "FACEBOOK PROJECT",

    target: "Modal7",
    h1: "Mockup Project",
    Project: "Website",
    Client: "Modal7",
    Languages: "JS,React",
    Preview: "www.mohsin.com",
  },
  {
    id: 8,
    category: ["all", "graphic"],
    src: img8,
    text: "DRIBBLE PROJECT",

    target: "Modal8",
    h1: "Mockup Project",
    Project: "Website",
    Client: "Modal8",
    Languages: "JS,React",
    Preview: "www.mohsin.com",
  },
  {
    id: 9,
    category: ["all", "mockup", "graphic"],
    src: img9,
    text: "BEHENCE PROJECT",

    target: "Modal9",
    h1: "Mockup Project",
    Project: "Website",
    Client: "Modal9",
    Languages: "JS,React",
    Preview: "www.mohsin.com",
  },
];
export default function Portfolio() {
  const [filter, setfilter] = useState("all");
  // const [color,setcolor]=useState("rgb(255, 180, 0)")
  function fillgallery(category) {
    setfilter(category);
  }
  return (
    <div className="portfoliopage">
      
  
  
      <div className="porthead py-5">
      <h1 className="fron">
          MY
          <span className="me">PORTFOLIO</span>
        </h1>
        <h1 className="bac">WORKS</h1>
        
      </div>

      <div className="gallery-nav py-5">
        {gallery.slice(0, 5).map((i, j) => (
          <Link

            onClick={(e) => {
              e.preventDefault();
              fillgallery(i.acat);
            }}
            style={{ color: filter === i.acat ? "rgb(255, 180, 0)" : "var(--whitesilver)"}}
          >
            {i.label}
          </Link>
        ))}
      </div>

      <div className="container">
      <div className="row gallery py-4">
        {gallery.map(
          (i, j) =>
            // <div className="img" style={{backgroundImage:`url(${i.src})`,height:"200px",width:"320px"}}></div>

            (filter === "all" || i.category.includes(filter)) && (
              <div className="col-12 col-md-6 col-lg-4">
                <div
                data-bs-toggle="modal"
                data-bs-target={`#${i.target}`}
                key={j}
                className="gallery-item mb-4"
                style={{ backgroundImage: `url(${i.src})` }}
              >
                <p className="portfolio-text">{i.text}</p>

                
              </div>



              </div>
            )
        )}






      </div>
      </div>

      <div className="">
        {
            gallery.map((i,j)=>(
                <div class="modal fade abccc" id={i.target} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
                style={{zIndex:"1050"}}>

                  <div class="modal-dialog modal-md">
                    <div class="modal-content">

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"var(--whitesilver)"}}></button>

                        <h1 className="title" id="exampleModalLabel">
                          {i.text}
                        </h1>
                        
                        <div className="row px-2">
                            <div className="col-6 ">
                                <p className="modaltext"><GrDocumentText /> Project: <span style={
                                  {fontWeight:"bold"}
                                }>{i.Project}</span></p>
                            </div>
                            <div className="col-6 ">
                                <p className="modaltext"><IoPerson /> Project: <span style={
                                  {fontWeight:"bold"}
                                }>{i.Client}</span></p>
                            </div>
                            <div className="col-6 ">
                                <p className="modaltext"><IoCodeSlash /> Project: <span style={
                                  {fontWeight:"bold"}
                                }>{i.Languages}</span></p>
                            </div>
                            <div className="col-6 ">
                                <p className="modaltext"><FiExternalLink /> Project: <Link ><span style={
                                  {fontWeight:"bold",fontSize:"15px"}
                                }>{i.Preview}</span></Link></p>
                            </div>
                        </div>
                        <div className="modalimg" style={{backgroundImage:`url(${i.src})`}}>

                        </div>

                    </div>
                  </div>
                </div>
            ))
        }
      </div>
    </div>
  );
}
