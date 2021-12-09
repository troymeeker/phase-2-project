import React from "react";
import Item from "./Item";


function ItemList({ pets, onPetDelete, onPetAdopt}){
        
        const allPets = pets.map((pet) => ( 
              <Item key={pet.id} pet={pet} onPetDelete={onPetDelete} onPetAdopt={onPetAdopt} /> 
            )  
          )
        return <div>{allPets}</div>;  
}

export default ItemList;