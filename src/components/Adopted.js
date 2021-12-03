import React from "react";
import AdoptedPet from "./AdoptedPet";


 function Adopted({pets}){

    const petCards = pets.map((pet) => 
        <AdoptedPet pet={pet} key={pet.id}/>
    )
    
 
     return(
      <div>
          <h1 className="grid-header ">Adopted Pets:</h1>
          {petCards}
     </div>
     )
 }

 export default Adopted;