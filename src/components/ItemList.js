import React from "react";
import Item from "./Item";


function ItemList({ pets, onPetDelete}){
        
        const allPets = pets.map((pet) => ( 
              <Item key={pet.id} pet={pet} onPetDelete={onPetDelete}  /> 
            )  
          )
        return <div>{allPets}</div>;  
}

export default ItemList;