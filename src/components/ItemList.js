import React, {useEffect, useState} from "react";
import Item from "./Item";


function ItemList(){
    const [pets, setPets] = useState([]);

    //fetch data from http://localhost:3000/pets w useEffect
    useEffect(()=> {
        fetch('http://localhost:3000/pets')
        .then((resp) => resp.json())
        .then((pets) => setPets(pets))
    }, [])

    //map each item and make an <Item> component for each item and display some info about each item
    return(
        <div>
            <ul> 
             { pets.map((pet) => {
                return (
                  <Item key={pet.id} pet={pet}/>
                 )
                //  .filter()
             })}
            </ul>
          
        </div>
    )
}

export default ItemList;