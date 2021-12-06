import React, { useState } from "react";

function AdoptedPet({pet}){
     const {image, name} = pet;
     const [adoptedPets, setAdoptedPets] = useState([])


    function handleReturnPet(){
         alert("Are you sure you would like to return this pet?")
        // run another patch to set isAdopted back to false & remove from adopted pets 
        // onReturn(pet.id)
        fetch(`http://localhost:3000/pets/${pet.id}`, { 
            method: "PATCH",  
            headers: {
                "Content-type": "application/json"
            }, 
             body: JSON.stringify({isAdopted: false})
           })
        .then((resp) => resp.json())
        .then((adoptedPets) => 
            setAdoptedPets(adoptedPets),
            // console.log(adoptedPets)
        )
       
       //need to remove pet without refresh here

    }                

    return (
        <div className="grid-item"> 
          <h2>{name}</h2>
          <img src={image} alt={name} className="grid-img"/>
          <button onClick={handleReturnPet}>UnAdopt this Pet</button> 
        </div>
    )
}

export default AdoptedPet;