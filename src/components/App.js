import React from "react";
import NavBar from "./NavBar"
import Home from "./Home";
import About from "./About";
import {BrowserRouter as Router,
 Switch, 
 Route, 
 Link
} from "react-router-dom";


function App() {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div> 
      <NavBar/>
    </Router>
  )
}

export default App;
