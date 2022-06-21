import React from "react";

function Filter({ setPets, pets}){

function fetchAll(){
  
        fetch("http://localhost:3001/pets")
        .then((resp) => resp.json())
        .then((petArr) => {
            
            setPets(petArr)
        })
 
}
function fetchDogs(){
  fetch("http://localhost:3001/pets?type=dog")
        .then((resp) => resp.json())
        .then((petArr) => {
            
            setPets(petArr)
        })
}
function fetchCats(){
  fetch("http://localhost:3001/pets?type=cat")
  .then((resp) => resp.json())
  .then((petArr) => {
      
      setPets(petArr)
  })
}
function fetchBirds(){
  fetch("http://localhost:3001/pets?type=bird")
  .then((resp) => resp.json())
  .then((petArr) => {
      
      setPets(petArr)
  })
}
  

    return (
      <div>
        <h3>Filter Animals</h3>
        <div className="option-container"> 
           <button className="select" onClick={fetchAll}>ALL</button>
           <button className="select" onClick={fetchDogs}>DOGS</button>
           <button className="select" onClick={fetchCats}>CATS</button>
          <button className="select" onClick={fetchBirds}>BIRDS</button>
        </div>
{/*       
        <select onChange={handlePetChange} >
            <option value="All"> All</option>
            <option value="Dog"> Dogs</option>
            <option value="Cat"> Cats</option>
            <option value="Bird"> Birds</option>
        </select> */}
      </div>
    )
}

export default Filter;