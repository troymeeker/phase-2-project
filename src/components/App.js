import React from "react";
import Animals from "./Animals";
import About from "./About";
import Users from "./Users";
import Adopted from "./Adopted"
import {BrowserRouter as Router,
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
              <Link to="/">ANIMALS FOR ADOPTION</Link>
            </h4>
            
            <h4>
              <Link to="/about">ABOUT</Link>
            </h4>
            <h4>
              <Link to="/users">USERS</Link>
            </h4>
            <h4>
              <Link to="/adopted">ADOPTED ANIMALS</Link>
            </h4>
          
        </nav>

       <Switch>
          <Route exact path="/">
            <Animals />
          </Route> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/adopted">
            <Adopted />
          </Route>
        </Switch>
      </div> 
      
    </Router>
  )
}

export default App;
