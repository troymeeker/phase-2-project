import React from "react";
import AdoptedPet from "./AdoptedPet";


 function Adopted({filteredAdoptedPets, setPets}){

    // adoptedPets.map is not a function


     const petCards = filteredAdoptedPets.map((pet) => 
        <AdoptedPet 
             pet={pet} 
             key={pet.id}  
             setPets={setPets}
            
        />
     )
    
 
     return(
      <div>
          <h2 className="grid-header ">Adopted Pets:</h2>
          {petCards}
     </div>
     )
 }

 export default Adopted;