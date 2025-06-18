import landscaping from './pictures/landscaping.png'
import demo from './pictures/demo.png'
import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Form } from './components/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <div className = "workarea">
          <h1 className = "worktitle">
            
          </h1>
          <p className = "workdesc">
             
          </p>
          <div className = "cardarea">

            <a href = "/landscaping">
              <div className = "workcard">
                <div className = "workcardpic">
                  <img src = {landscaping} />
                </div>
                <div className = "workcardtext">
                  <div className = "workcardtitle">
                    <p>Landscaping and Lawn Care</p>
                  </div>
                  <div className = "workcarddesc">
                    <p>Some description about the type of work it is and what he does. Im gonna yap about a bunch of stuff here so i can test the view with a description
                      I feel like if i keep writing this will overflow unfortunately which i dont wanna have to fix lol
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href = "/landscaping">
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
            </div>
            </a>

            <a href = "/landscaping">
            <div className = "workcard">
              <div className = "workcardpic">
                <img src = {demo} />
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
            </a>

            <a href = "/landscaping">
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
            </a>

            <a href = "/landscaping">
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
            </a>
            <a href = "/landscaping">
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
            </a>
            
          </div>
        </div>
        <div className = "linedivider"></div>
        < Form />
        

        <Footer />
        
        
      </header>
    </div>
  );
}

export default App;
