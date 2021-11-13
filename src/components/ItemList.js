import React from "react";
import Item from "./Item";


function ItemList({ pets }){
    //map each item and make an <Item> component for each item and display some info about each item
        
          const allPets =  pets.map((pet) => (
                  <Item key={pet.id} pet={pet} />
                 )
          )
        return <div>{allPets}</div>;
}

export default ItemList;