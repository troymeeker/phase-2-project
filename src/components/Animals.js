import React, {useEffect, useState } from "react";
import ItemList from "./ItemList";
import Search from "./Search";
import Filter from "./Filter";
import Form from "./Form";


function Animals(){
  
   const [search, setSearch] = useState("");
   const [pets,setPets] = useState([])
 
   const displayedPets = pets.filter((pet) => 
       pet.name?.toLowerCase().includes(search.toLowerCase())
   )
  
   useEffect(() => {
    fetch('http://localhost:3000/pets')
    .then((resp) => resp.json())
    .then((petArr) => {
        setPets(petArr) 
       
        })
  },[])

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
      function handlePetAdopt(id){
        const adoptedPets = pets.filter((pet) => 
        pet.isAdopted
      ); 
      setPets(adoptedPets);
      
     }

   
        return (

    <div className="animals-page">
        <h2>Animals available to support and Adopt</h2>
        <h3>Add an Animal</h3>
           <br/>
           
           
        <Form handleSubmit={handleSubmit}/>      

        <Search setPets={setPets} search={search} allPets={pets} onSearchChange={setSearch} />

        <Filter handlePetChange={handlePetChange} />           

        <ItemList pets={displayedPets} onPetDelete={handleDelete} onAdopt={handlePetAdopt}/>



    </div>) 
}

export default Animals;