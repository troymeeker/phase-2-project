import React from "react";

function AdoptedPet({pet, onPetReturn}){
     const {image, name} = pet;


    function handleReturnPet(){
        // prompt("Are you sure you would like to return this pet?")
         alert("Are you sure you would like to return this pet?")
        

        fetch(`http://localhost:3001/pets/${pet.id}`, { 
            method: "PATCH",  
            headers: {
                "Content-type": "application/json"
            }, 
             body: JSON.stringify({isAdopted: false})
           })
        .then((resp) => resp.json())
        .then((adoptedPet) => 
         onPetReturn(adoptedPet)
            //  console.log(adoptedPets)
                     
            // adoptedPets is empty here 
        )    
       //need to remove pet without refresh here
    }                

    return (
        <div className="adopted-pet"> 
            <ul>
                <h2>{name}</h2>
                <img src={image} alt={name} className="grid-img"/>
                <button onClick={handleReturnPet}>UnAdopt this Pet</button> 
          
            </ul>  
        </div>
    )
}

export default AdoptedPet;