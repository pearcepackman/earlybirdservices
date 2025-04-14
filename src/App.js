import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className = "navarea">
          <div className = "topnav">
            <div className = "birdpic"></div>
            <div className = "leftnavwords">
              <h1 className = "biztitle">Early Bird Services, LLC</h1>
              <h5 className = "bizdesc">Located in Hampstead, MD, serving all of Carroll County and surrounding areas. Lawn , landscape, jun</h5>
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
            What We Do
          </h1>
          <p className = "workdesc">
            Meow We do all sorts of things from landscaping, snow removal, demolition, moving services, etc.
          </p>
          <div className = "cardarea">
            <div className = "workcard">

            </div>
            <div className = "workcard">

            </div>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
