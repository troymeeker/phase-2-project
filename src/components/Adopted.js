import React from "react";
import AdoptedPet from "./AdoptedPet";


 function Adopted({pets, setPets, adoptedPet, onPetReturn}){

    // adoptedPets.map is not a function


     const petCards = pets.map((pet) => 
        <AdoptedPet 
             pet={pet} 
             key={pet.id}  
             setPets={setPets}
             adoptedPet={adoptedPet}
             onPetReturn={onPetReturn}
            
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