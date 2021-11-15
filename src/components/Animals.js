import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";

function Animals(){
    const [pets, setPets] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(()=> {
        fetch('http://localhost:3000/pets')
        .then((resp) => resp.json())
        .then((petsArr) => setPets(petsArr))
    }, [])

 function handleChange(e){ 
          console.log(e.target.value);
    }

    return (
    <div className="animals-page">
        <h2>Animals available to support and Adopt</h2>
        
           <select onChange={handleChange}>
               <option  value="All"> All</option>
               <option value="Dogs"> Dogs</option>
               <option value="Cats"> Cats</option>
               <option value="Birds"> Birds</option>
           </select>
      
      {/* render filtered pets by onChange above */}
       <ItemList pets={pets} />
        
    </div>)
}

export default Animals;