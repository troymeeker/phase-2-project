import React from "react";

 function Search({search, onSearchChange}){
    // function handleSearch(e){
    //     pets.filter((pet) => pet.name.toLowerCase().includes(e.target.value.toLowerCase()))
    //WHY IS HANDLESEARCH NOT NEEDED HERE?
    //  }
    
    return(
     <div>
        <h3>Search for Animals by Name</h3>
        <input type="text" name="search" placeholder="Search..." value={search} onChange={(e) => onSearchChange(e.target.value)}/>
        {/* <button onClick={handleSearch}>Search</button> */}
    </div>
    )
 }

 export default Search;