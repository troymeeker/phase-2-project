import React from "react";


 function Adopted({pets}){
   
   const adoptedPets = pets.filter((pet) => {
          if(pets.isAdopted){
          return pets
           
          }
          return pets
         })

//   useEffect(() => {
//    fetch('http://localhost:3000/pets')
//     .then((resp) => resp.json())
//     .then((adoptedPets) => {
//       console.log(adoptedPets);
//   })
// }, [])

    

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