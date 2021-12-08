import React, { useEffect } from "react";

function AdoptedPet({pet, setAdoptedPets, adoptedPets}){
     const {image, name} = pet;

     useEffect(() => {
        fetch('http://localhost:3000/pets')
        .then((resp) => resp.json())
        .then((data) => {
            // setAdoptedPets(data)
             let adoptedPetArr = data.filter((pet) => pet.isAdopted === true)
            setAdoptedPets(adoptedPetArr)
           
            })
     }, [])

    function handleReturnPet(){
        alert("Are you sure you would like to return this pet?")
       
      
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
             console.log(adoptedPets)
                     
            // adoptedPets is empty here 
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