import React, { useEffect, useState  } from "react";
import ItemList from "./ItemList";

 function Adopted(){
     const [pets, setPets] = useState([])
  
  useEffect(() => {
   fetch('http://localhost:3000/pets')
    .then((resp) => resp.json())
    .then((petArr) => {
      setPets(petArr);
  })
}, [])

    //  const adoptedPets = pets.filter((pet) => {
    //             return pets.isAdopted === true;
    //          })

    return (
        <div className="adopted-page">
            <h2>My Adopted Animals:</h2>
            <div>
            <ItemList pets={pets}/>
            {/* render only pets with isAdopted =  true */}
       
            </div>
            
        </div>
    )
 }

 export default Adopted;