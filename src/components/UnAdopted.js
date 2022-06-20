import React from "react";


function UnAdopted({pets}){
   
    return (
        <div>
            <h2>unadopted Pets</h2>
            <ul>
               {pets.filter((pet)=> pet.isAdopted === false).map((pet) => <li> {pet.name}</li>)}
                
            </ul>
            
            
        </div>
    )
}

export default UnAdopted;