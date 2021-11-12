import React from "react";
import ItemList from "./ItemList";

function Animals(){

    function handleChange(e){
        console.log(e.target.value);
    }
    return (
    <div >
        <h2>Animals available to support and Adopt</h2>
        
        <form text="test">
           <select onChange={handleChange}>
               <option  value="All"> All</option>
               <option value="Dogs"> Dogs</option>
               <option value="Cats"> Cats</option>
           </select>
           
        </form>
       <ItemList />
        
    </div>)
}

export default Animals;