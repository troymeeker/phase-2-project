
import React from "react";
import Adopted from "./Adopted";
import Animals from "./Animals";
import Home from "./Home";
import About from "./About";
import { 
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link
} from "react-router-dom";


function App() {

 
  return(
    <Router>
      <div>
        <nav className="navbar">
            <h4>
              <Link to="/">HOME</Link>
            </h4>
            <h4>
              <Link to="/animals">ANIMALS</Link>
            </h4>
            <h4>
              <Link to="/about">ABOUT US</Link>
            </h4>
            <h4 >
              <Link to="/adopted" >ADOPTED ANIMALS</Link>
            </h4>
          
        </nav>

       <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/animals">
            <Animals />
          </Route> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/adopted" >
            <Adopted 
            // adoptedPets={adoptedPets} 
            />
          </Route>
        </Switch>
      </div> 
      
    </Router>
  )
}

export default App;
