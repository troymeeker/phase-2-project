import React, { useState } from "react";
import ItemList from "./ItemList";
import Search from "./Search";
import Filter from "./Filter";
import Form from "./Form";



function Animals({pets, onAdopt, onPetDelete, handleSubmit, handlePetChange }){
   
  
   const [search, setSearch] = useState("");
  
 
   const displayedPets = pets.filter((pet) => 
       pet.name?.toLowerCase().includes(search.toLowerCase())
   )
  return (

    <div className="animals-page">
        <h2>Animals available to support and Adopt</h2>
        <h3>Add an Animal</h3>
           <br/>
           
           
        <Form handleSubmit={handleSubmit} />      

        <Search  search={search} allPets={pets} onSearchChange={setSearch} />

        <Filter onPetChange={handlePetChange} />           

        <ItemList pets={displayedPets} onPetDelete={onPetDelete} onAdopt={onAdopt}/>

       

    </div>) 
}

export default Animals;