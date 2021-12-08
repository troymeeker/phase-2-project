import React from "react";
import Item from "./Item";


function ItemList({ pets, onAdopt , onPetDelete, adoptedPets, setAdoptedPets}){
        
        const allPets = pets.map((pet) => ( 
              <Item key={pet.id} pet={pet} onPetDelete={onPetDelete} onAdopt={onAdopt} adoptedPets={adoptedPets} setAdoptedPets={setAdoptedPets}/> 
            )  
          )
        return <div>{allPets}</div>;  
}

export default ItemList;