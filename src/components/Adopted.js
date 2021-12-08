import React from "react";
import AdoptedPet from "./AdoptedPet";


 function Adopted({adoptedPets, setAdoptedPets}){
   // debugger
     const petCards = adoptedPets.map((pet) => 
        <AdoptedPet pet={pet} key={pet.id}  setAdoptedPets={setAdoptedPets} adoptedPets={adoptedPets}
          />
     )
    
 
     return(
      <div>
          <h1 className="grid-header ">Adopted Pets:</h1>
          {petCards}
     </div>
     )
 }

 export default Adopted;