import React, {useState} from "react";



 function Adopted(){
    const [pets, setPets] = useState([]);
    // const [adopted, setAdopted] = useState([]);

    const adoptedPets = pets.filter((pet) => {
        if(pet.isAdopted){
             fetch(`http://localhost:3000/pets.isAdopted`)
            .then((resp) => resp.json())
            .then((pets) => setPets(pets))
    }
   })

    return (
        <div className="adopted-page">
            <h2>My Adopted Animals:</h2>
            <div>
         {adoptedPets}
            {/* render only pets with isAdopted =  true */}
       
            </div>
            
        </div>
    )
 }

 export default Adopted;