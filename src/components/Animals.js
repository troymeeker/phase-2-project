import React, {useState } from "react";
import ItemList from "./ItemList";
import Search from "./Search";
 import Filter from "./Filter";



function Animals({pets, onAdopt, onPetDelete, onSubmit, onImageChange, onNameChange, onTypeChange, onPetChange}){
  
   const [search, setSearch] = useState("");
  
   
 
   const displayedPets = pets.filter((pet) => 
       pet.name?.toLowerCase().includes(search.toLowerCase())
   )

    // const adoptedPets = pets.filter((pet) => 
    //     pet.isAdopted
    // )

    
    
        return (

    <div className="animals-page">
        <h2>Animals available to support and Adopt</h2>
        <h3>Add an Animal</h3>
           <br/>
           <form onSubmit={onSubmit}>
               <input  type="text" onChange={onNameChange} value={pets.name} placeholder="Name"/>
               <input  type="text" onChange={onImageChange} value={pets.image} placeholder="Image URL"/>
               <select onChange={onTypeChange} >
                  <option value="Dog"> Dog</option>
                  <option value="Cat"> Cat</option>
                  <option value="Bird"> Bird</option>
               </select>
               <button>Submit</button>
           </form>
           
        <Search search={search} onSearchChange={setSearch} />

        <Filter onPetChange={onPetChange} />
                 
        <ItemList pets={displayedPets} onPetDelete={onPetDelete} onAdopt={onAdopt}/>

    </div>) 
}

export default Animals;