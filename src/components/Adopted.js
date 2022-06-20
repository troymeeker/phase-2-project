import React from "react";
import AdoptedPet from "./AdoptedPet";


 function Adopted({pets, onPetReturn}){

    // adoptedPets.map is not a function


     const petCards = pets.map((pet) => 
        <AdoptedPet 
             pet={pet} 
             key={pet.id}  
             
             onPetReturn={onPetReturn}
            
        />
     )
    
 
     return(
      <div>
          <h2 className="grid-header ">Adopted Pets:</h2>
             <p className="adopted-num"> You've adopted {petCards.length} Pets</p>
             
             {petCards}
       
          
          
     </div>
     )
 }

 export default Adopted;