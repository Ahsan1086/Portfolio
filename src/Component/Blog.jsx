import React, { Component } from 'react'
import blog1 from '../media/blog-post-1.jpg'
import blog2 from '../media/blog-post-2.jpg'
import blog3 from '../media/blog-post-3.jpg'
import blog4 from '../media/blog-post-4.jpg'
import blog5 from '../media/blog-post-5.jpg'
import blog6 from '../media/blog-post-6.jpg'
import './Blog.css'
import { IoMdPerson } from "react-icons/io";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BsFillTagsFill } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";


const blogarr=[
  {
    src:blog1,
    title:"How to Own Your Audience by Creating an Email List",
    text:"Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b",
    id:"modal1",
    name:"ahsan",
    date:"9 January 2012",
    field:"wordpress, business, economy, design"
  },
  {
    src:blog2,
    title:"Top 10 Toolkits for Deep Learning in 2022",
    text:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e",
    id:"modal2",
    name:"rio",
    date:"9 January 2012",
    field:"wordpress, business, economy, design"
  },
  {
    src:blog3,
    title:"Everything You Need to Know About Web Accessibility",
    text:"Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma",
    id:"modal3",
    name:"hassan",
    date:"9 January 2012",
    field:"wordpress, business, economy, design"
  },
  {
    src:blog4,
    title:"How to Inject Humor & Comedy Into Your Brand",
    text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es",
    id:"modal4",
    name:"aftab",
    date:"9 January 2012",
    field:"wordpress, business, economy, design"
  },
  {
    src:blog5,
    title:"Women in Web Design: How To Achieve Success",
    text:"Jorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    id:"modal5",
    name:"alam",
    date:"9 January 2012",
    field:"wordpress, business, economy, design"
  },
  {
    src:blog6,
    title:"Evergreen versus topical content: An overview",
    text:"Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    id:"modal6",
    name:"imran",
    date:"9 January 2012",
    field:"wordpress, business, economy, design"
  },
  
]
export default class Blog extends Component {
  render() {
    return (
      <div className='blog'>
        
        <div className="porthead py-5">
      <h1 className="fron">
          MY
          <span className="me">BLOG</span>
        </h1>
        <h1 className="bac">POSTS</h1>
        
      </div>

        <div className="container">
          <div className="row">
            {
              blogarr.map((i,j)=>(
                <div className="col-12 col-md-6 col-lg-4 mb-5 blogs" data-bs-toggle="modal" data-bs-target={`#${i.id}`} style={{cursor:"pointer"}}>
                    <div className="blogimg">
                        <img src={i.src} alt="" />
                    </div>
                    <hr style={{height:"5px", backgroundColor:"#ffb300",opacity:"1",margin:"0px",padding:"0px"}}/>
                    <div className="blogtext">
                        <p className='blogtitle'>{i.title}</p>
                        <p className='blogtext1'>{i.text}</p>
                    </div>
                    
                </div>
              ))
            }
            
          </div>

          <div>

 <div className=''>{
  blogarr.map((i,j)=>(
    <div class="modal fade" id={i.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <div class="modal-content">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
        <div class="modal-header border-0">

        <div className="contacthead">
          <h1 className="back">POSTS</h1>
          <h1 className="front">
            POST
            <span className="touch">DETAILS</span>
          </h1>
        </div> 
        </div>
        <div class="modal-body px-5">

          <p className='firstline'><IoMdPerson style={{color:"#ffb300"}}/> {i.name} <FaRegCalendarDays style={{color:"#ffb300"}}/> {i.date} <BsFillTagsFill style={{color:"#ffb300"}}/> {i.field}</p>

          <h1 className='blogmodaltitle'>{i.title}</h1>
        <div className='blogmodalimg' style={{backgroundImage:`url(${i.src})`}}></div>
        <div>
          <p className='para'>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.</p>

          <div className="row">
            <div className="col-2"><FaQuoteLeft className='quotes'/></div>
            <div className="col-10"> <p style={{fontStyle:"italic"}} className='italicpara'>Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.</p></div>
          </div>

          <p className='para'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>


          <p className='para'>Riosum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>

        </div>
  
      </div>
    </div>
  </div>
  ))
  
  
  }</div>
            
          </div>
        </div>
      </div>
    )
  }
}
