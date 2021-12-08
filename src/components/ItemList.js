import React from "react";
import Item from "./Item";


function ItemList({ pets, onAdopt , onPetDelete}){
        
        const allPets = pets.map((pet) => ( 
              <Item key={pet.id} pet={pet} onPetDelete={onPetDelete} onAdopt={onAdopt} /> 
            )  
          )
        return <div>{allPets}</div>;  
}

export default ItemList;