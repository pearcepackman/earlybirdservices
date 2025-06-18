import React from "react";
import './form.css';
export function Form() {
    return(
        <div className = "contactarea">
           <div className = "birdpiccontact"></div>
          
          <form className="contact-form">
            <h2 className = "formtitle">Contact Us</h2>
            <label>
              First Name *
              <input type="text" name="name" required />
              
            </label>

            <label>
              Last Name *
              <input type="email" name="email" required />
            </label>
            <label>
              Phone *
              <input type="email" name="email" required />
            </label>
            <label>
              Email *
              <input type="email" name="email" required />
            </label>
            <label>
              Address *
              <input type="email" name="email" required />
            </label>
            <label>
              City *
              <input type="email" name="email" required />
            </label>
            <label>
              State *
              <input type="email" name="email" required />
            </label>
            <label>
              Zip Code *
              <input type="email" name="email" required />
            </label>
            <label>
              How Did You Hear About Us?
              <input type="email" name="email" />
            </label>

            <label>
              What Kind of Work is Needed?
              <textarea name="message" rows="5" required></textarea>
            </label>

            <button type="submit">Send</button>
          </form>
        </div>
    )
}