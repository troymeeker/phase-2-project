
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
  const [adoptedPets, setAdoptedPets] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/pets')
    .then((resp) => resp.json())
    .then((petArr) => {
        setPets(petArr) 
        let adoptedPetArr = petArr.filter((pet) => pet.isAdopted === true)
        setAdoptedPets(adoptedPetArr)
        
        })
  },[setPets])

   
   function handlePetAdopt(){
    //     const adoptedPets = pets.filter((pet) => 
    //     pet.isAdopted
    //   ); 
    //   setPets(adoptedPets);
        setPets(pets)
      console.log(pets);
     }

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
            onAdopt={handlePetAdopt}
            onPetDelete = {handleDelete}
            handleSubmit={handleSubmit}
            // handlePetChange = {handlePetChange}
           
            />
          </Route> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/adopted" >
            <Adopted 
             adoptedPets={adoptedPets} 
             setAdoptedPets={setAdoptedPets}
            />
          </Route>
        </Switch>
      </div> 
      
    </Router>
  )
}

export default App;
