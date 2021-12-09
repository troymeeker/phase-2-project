
import React, {useState, useEffect} from "react";
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
  document.title = "Save-A-Pet";

  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
        
  },[])

  function fetchPets(){
    fetch('http://localhost:3000/pets')
    .then((resp) => resp.json())
    .then((petArr) => {
       setPets(petArr)
        //  let adoptedPetArr = petArr.filter((pet) => pet.isAdopted === true)
        // setPets(adoptedPetArr)
      //  console.log(pets);
        })
  }
  let filteredAdoptedPets = pets.filter((pet) => 
       pet.isAdopted
    ); 
    //pets.filter is not a function
   

    function handleSubmit(pet){ 
      fetch('http://localhost:3000/pets', {
          method: "POST", 
          headers: {
             "Content-Type": "application/json"
          },
          body: JSON.stringify(pet)
      })
      .then((resp) => resp.json())
      .then((pet) => {
          setPets([...pets, pet])         
      })
    } 

    function handleDelete(id){
      const updatedPets = pets.filter((pet) => pet.id !== id)
      setPets(updatedPets);
    } 

    
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
            <Animals 
            pets={pets} 
            setPets={setPets}
            // onAdopt={handlePetAdopt}
            onPetDelete = {handleDelete}
            handleSubmit = {handleSubmit}
            
            />
          </Route> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/adopted" >
            <Adopted 
             filteredAdoptedPets = {filteredAdoptedPets} 
             setPets = {setPets}
           
           
            />
          </Route>
        </Switch>
      </div> 
      
    </Router>
  )
}

export default App;
