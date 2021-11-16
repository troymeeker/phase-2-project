import React, {useState , useEffect} from "react";
import ItemList from "./ItemList";

function Animals(){
    const [name, setName] = useState("Name")
    const [image, setImage] = useState("Image URL")
    const [type, setType] = useState("All")
    const [pets, setPets] = useState([]);
    const [filteredPets, setFilteredPets] = useState([]);
  
    useEffect(()=> {
        fetch('http://localhost:3000/pets')
        .then((resp) => resp.json())
        .then((petsArr) => {
            setPets(petsArr) 
            setFilteredPets(petsArr)
    })
    }, [])

 function handleChange(e){ 
          console.log(e.target.value);
          //filter pets 
          if(e.target.value !== "All"){
                const filtered = pets.filter((pet) => pet.type === e.target.value.toLowerCase())
                setFilteredPets(filtered) 
          }else{
              setFilteredPets(pets)
          }
       
    }

    function handleSubmit(e){
         e.preventDefault();
         const data = { 
             name:name,
             image:image,
             type:type,
            };
        fetch('http://localhost:3000/pets', {
            method: "POST", 
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(data )
        })
        .then((resp) => resp.json())
        .then((pets) => setPets(pets))
    }
    function handleNameChange(e){
        setName(e.target.value)
      
    }

    function handleImageChange(e){
       setImage(e.target.value)
    }
    function handleTypeChange(e){
       setType(e.target.value)
    }

    return (
    <div className="animals-page">
        <h2>Animals available to support and Adopt</h2>
        
        <h3>Add an Animal</h3>
           <br/>

           <form onSubmit={handleSubmit}>
               <input  type="text" onChange={handleNameChange} value={name} />
               <input  type="text" onChange={handleImageChange} value={image} />
               <select onChange={handleTypeChange} value={type}>
                  <option value="Dog"> Dog</option>
                  <option value="Cat"> Cat</option>
                  <option value="Bird"> Bird</option>
               </select>
               <button type="submit" >Submit</button>
           </form>

           <br/>

           <h3>Filter Animals</h3>
           <select onChange={handleChange}>
               <option  value="All"> All</option>
               <option value="Dog"> Dogs</option>
               <option value="Cat"> Cats</option>
               <option value="Bird"> Birds</option>
           </select>
      
     
       <ItemList pets={filteredPets}  />
      
        
    </div>)
}

export default Animals;