import React from "react";

function Filter({onPetChange}){

  function handlePetChange(e){
    return onPetChange(e);
    //works on 1st change after refresh but none others
  }

    return (
      <div>
        <h3>Filter Animals</h3>
        <select onChange={(e) => handlePetChange(e)} >
            <option  value="All"> All</option>
            <option value="Dog"> Dogs</option>
            <option value="Cat"> Cats</option>
            <option value="Bird"> Birds</option>
        </select>
      </div>
    )
}

export default Filter;