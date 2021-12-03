import React, { useState } from "react";

function AdoptedPet({pet}){
     const {image, name} = pet;

     const [adoptedPetCard, setAdoptedPetCard] = useState([])


    function handleReturnPet(){
         alert("Are you sure you would like to return this pet?")
        // run another patch to set isAdopted back to false & remove from adopted pets 
        fetch(`http://localhost:3000/pets/${pet.id}`, { 
            method: "PATCH",  
            headers: {
                "Content-type": "application/json"
            }, 
             body: JSON.stringify({isAdopted: false})
           })
       .then((resp) => resp.json())
       .then((adoptedPetCard) => setAdoptedPetCard(adoptedPetCard))
       
       //need to remove pet without refresh here

    }                

    return (
        <div className="grid-item "> 
          <h2>{name}</h2>
            <img src={image} alt={name} className="grid-img"/>
            
            <button onClick={handleReturnPet}> UnAdopt this Pet</button> 
        </div>
    )
}

export default AdoptedPet;