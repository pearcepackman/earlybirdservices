import React from "react";
import './footer.css';
import facebooklogo from '../pictures/facebooklogo.png';

export function Footer(){
    return(
        <div className = "footer">
          <div className = "footerbox">
            <h1>Follow us!</h1>
            <div className='footerline'></div>
            <div className='footerpiccont'>
              <img src = {facebooklogo} className='socialpic'></img>
              <img src = {facebooklogo} className='socialpic'></img>
            </div>
            <h1>Accepted Payment Methods</h1>
            <div className='footerline'></div>
            <div className='footerpiccont'>
              <img src = {facebooklogo} className='socialpic'></img>
              <img src = {facebooklogo} className='socialpic'></img>
              <img src = {facebooklogo} className='socialpic'></img>
              <img src = {facebooklogo} className='socialpic'></img>
              <img src = {facebooklogo} className='socialpic'></img>
            </div>
            

          </div>
          <div className = "footerbox">
            <h1>Areas We Serve</h1>
            <div className='footerline'></div>
            <div className = 'locationsbox'>
                <h2>Hampstead, MD</h2>
                <h2>Manchester, MD</h2>
                <h2>Westminster, MD</h2>
                <h2>Manchester, MD</h2>
                <h2>Manchester, MD</h2>
                <h2>Manchester, MD</h2>
            </div>
          </div>
          <div className='footerbox'>
            <h1>Contact Us</h1>
            <div className='footerline'></div>
            <h2>Michael Briggs: 443-536-1255</h2>
            <h2>earlybirdservices@gmail.com</h2>
          </div>
          
          
        </div>

    );
};