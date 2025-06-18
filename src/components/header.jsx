import React from "react";
import './header.css';

export function Header(){
    return(
<div className = "navarea">
          <div className = "topnav">
            <div className = "leftnavwords">
              <h1 className = "biztitle">Early Bird Services LLC</h1>
              <h5 className = "bizdesc">Serving all of Carroll County and surrounding areas. Lawn care, landscaping, junk removal, demolition, and snow removal!<br />
              Commercial and Residential | Licensed and Insured<br />443-536-1255 | earlybirdservicesllcmd@gmail.com<br />Michael Briggs: Owner / Operator</h5>
            </div>
            <div className='righthandnav'>
              <div className = "birdpic"></div>
            </div>
            
          </div>
          <div className = "navoptions">
            <a href = "/"><p>Home</p></a>
            <a href = "/landscaping"><p>Landscaping</p></a>
            <p>Snow Removal</p>
            <p>Demolition</p>
            <p>Moving Services</p>
            <a href = "/contact"><p>Contact</p></a>
          </div>
          
        </div>
    )
};