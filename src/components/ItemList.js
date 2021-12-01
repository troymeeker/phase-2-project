import React from "react";
import Item from "./Item";


function ItemList({ pets, onAdopt , onPetDelete}){
    //map each item and make an <Item> component for each item and display some info about each item
        
          const allPets = pets.map((pet) => (
                  <Item key={pet.id} pet={pet}  onPetDelete={onPetDelete} onAdopt={onAdopt}/>
                 )
          )
        return <div>{allPets}</div>;

    
}

export default ItemList;