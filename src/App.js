import logo from './logo.svg';
import imageplace from './pictures/imageplace.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
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
            
            <p>Landscaping</p>
            <p>Snow Removal</p>
            <p>Demolition</p>
            <p>Moving Services</p>
            <p>Contact</p>
          </div>
          
        </div>

        <div className = "workarea">
          <h1 className = "worktitle">
            
          </h1>
          <p className = "workdesc">
             
          </p>
          <div className = "cardarea">

            <a href = "/landscaping">
              <div className = "workcard">
                <div className = "workcardpic">
                  
                </div>
                <div className = "workcardtitle">
                  <p>Landscaping and Lawn Care</p>
                </div>
                <div className = "workcarddesc">
                  <p>Some description about the type of work it is and what he does. Im gonna yap about a bunch of stuff here so i can test the view with a description
                    I feel like if i keep writing this will overflow unfortunately which i dont wanna have to fix lol
                  </p>
                </div>
              </div>
            </a>

            <div className = "workcard">
              <div className = "workcardpic">
                
              </div>
              <div className = "workcardtitle">
                <p>Snow Removal</p>
              </div>
              <div className = "workcarddesc">
                <p>Some description about the type of work it is and what he does. Im gonna yap about a bunch of stuff here so i can test the view with a description
                  I feel like if i keep writing this will overflow unfortunately which i dont wanna have to fix lol
                </p>
              </div>
            </div><div className = "workcard">
              <div className = "workcardpic">
                
              </div>
              <div className = "workcardtitle">
                <p>Demolition Work</p>
              </div>
              <div className = "workcarddesc">
                <p>Some description about the type of work it is and what he does. Im gonna yap about a bunch of stuff here so i can test the view with a description
                  I feel like if i keep writing this will overflow unfortunately which i dont wanna have to fix lol
                </p>
              </div>
            </div>
            <div className = "workcard">
              <div className = "workcardpic">
                
              </div>
              <div className = "workcardtitle">
                <p>Moving Services</p>
              </div>
              <div className = "workcarddesc">
                <p>Some description about the type of work it is and what he does. Im gonna yap about a bunch of stuff here so i can test the view with a description
                  I feel like if i keep writing this will overflow unfortunately which i dont wanna have to fix lol
                </p>
              </div>
            </div>
            <div className = "workcard">
              <div className = "workcardpic">
                
              </div>
              <div className = "workcardtitle">
                <p>Other Work</p>
              </div>
              <div className = "workcarddesc">
                <p>Some description about the type of work it is and what he does. Im gonna yap about a bunch of stuff here so i can test the view with a description
                  I feel like if i keep writing this will overflow unfortunately which i dont wanna have to fix lol
                </p>
              </div>
            </div>
            <div className = "workcard">
              <div className = "workcardpic">
                
              </div>
              <div className = "workcardtitle">
                <p>Other Work</p>
              </div>
              <div className = "workcarddesc">
                <p>Some description about the type of work it is and what he does. Im gonna yap about a bunch of stuff here so i can test the view with a description
                  I feel like if i keep writing this will overflow unfortunately which i dont wanna have to fix lol
                </p>
              </div>
            </div>
            
          </div>
        </div>
        <div className = "linedivider"></div>
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
        <div className = "footer">
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
