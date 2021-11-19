import React from "react";

function Filter({change}){

    return (
      <div>
        <h3>Filter Animals</h3>
        <select onChange={change}>
            <option  value="All"> All</option>
            <option value="Dog"> Dogs</option>
            <option value="Cat"> Cats</option>
            <option value="Bird"> Birds</option>
        </select>
      </div>
    )
}

export default Filter;