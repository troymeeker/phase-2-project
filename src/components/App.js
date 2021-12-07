
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

  const [pets,setPets] = useState([]);
    

  useEffect(() => {
    fetch('http://localhost:3000/pets')
    .then((resp) => resp.json())
    .then((petArr) => {
        setPets(petArr) 
       
        })
  },[setPets])


  function handlePetChange(e){ 
    console.log(e.target.value);
    
    //filter pets 
    if(e.target.value !== "All"){
      const petsToDisplay= pets.filter((pet) => pet.type === e.target.value.toLowerCase());
   
      setPets(petsToDisplay);
    
    }else{
      setPets(pets);
    }
   }    

   function handlePetAdopt(){
    //     const adoptedPets = pets.filter((pet) => 
    //     pet.isAdopted
    //   ); 
    //   setPets(adoptedPets);
        setPets(pets)
      console.log(pets);
     }

    function handleSubmit(data){ 
      
      fetch('http://localhost:3000/pets', {
          method: "POST", 
          headers: {
             "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then((resp) => resp.json())
      .then((data) => {
          setPets([...pets, data])         
      })
    } 

    function handleDelete(id){
      const updatedPets = pets.filter((pet) => pet.id !== id)
      setPets(updatedPets);
    } 

  const adoptedPets = pets.filter((pet) => 
      pet.isAdopted
    );


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
            onPetChange = {handlePetChange}
            // setPets={setPets}
            />
          </Route> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/adopted" >
            <Adopted 
             adoptedPets={adoptedPets} 
            />
          </Route>
        </Switch>
      </div> 
      
    </Router>
  )
}

export default App;
