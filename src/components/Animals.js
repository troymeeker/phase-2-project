import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import Search from "./Search";
import Filter from "./Filter";
import Form from "./Form";



function Animals({pets, onPetDelete, handleSubmit, setPets}){
   
  
//    const [search, setSearch] = useState("");
    const [filteredPets, setFilteredPets] = useState([]);
  
   useEffect(() => {
    if(pets !== undefined && pets.length !== 0){
        setFilteredPets(pets)
    } else{
        fetch("http://localhost:3001/pets")
        .then((resp) => resp.json())
        .then((petArr) => {
            
            setFilteredPets(petArr)
        })
    }
   },[pets])
  

    
    function handlePetAdopt(adoptedPet){
        // console.log(pets);
        // create new arr of pets & swap old pet w updated
        const adoptedPets = pets.map((petObj) => {
            if(petObj.id === adoptedPet.id){
                return adoptedPet
            }else{
                return petObj
            }
        })
        setPets(adoptedPets);
    }

  return (

    <div className="animals-page">
        <h2>Animals available to support and Adopt</h2>
        <h3>Add an Animal</h3>
           <br/>
           
           
        <Form handleSubmit={handleSubmit} />      

        {/* <Search  search={search} onSearchChange={setSearch} /> */}

        <Filter  setPets={setPets} pets={pets}/>           

        <ItemList
          onPetAdopt= {handlePetAdopt}
          pets={filteredPets}
          
          onPetDelete={onPetDelete} 
        
         />
      <a href="#top" className="top-link">TOP OF PAGE</a>

    </div>) 
}

export default Animals;