import React, {useState , useEffect} from "react";
import ItemList from "./ItemList";
import Search from "./Search";
import Filter from "./Filter";
import Adopted from "./Adopted";


function Animals(){

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [type, setType] = useState("All")
    const [pets, setPets] = useState([]);
    const [search, setSearch] = useState("");
  
     useEffect(() => {
        fetch('http://localhost:3000/pets')
        .then((resp) => resp.json())
        .then((petArr) => {
            setPets(petArr) 
           
            })
     },[])

 function handleChange(e){ 
        //   console.log(e.target.value);
          //filter pets 
          if(e.target.value !== "All"){
                const filtered = pets.filter((pet) => pet.type === e.target.value.toLowerCase())
                setPets(filtered) 
          }else{
            setPets(pets)
          }
    }

    function handleSubmit(e){
         e.preventDefault();
          const data = { 
             name: name,
             type: type, 
             image: image,
             likes: 0,
             donations: 0,
             isAdopted: false,
            };

        fetch('http://localhost:3000/pets', {
            method: "POST", 
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((resp) => resp.json())
        .then((data) => {
            // debugger
             setPets([...pets, data])         
            })
    }

    function handleNameChange(e){
        setName(e.target.value)
    }

   function handleDelete(id){
       const updatedPets = pets.filter((pet) => pet.id !== id)
       setPets(updatedPets);
   }

   function handleImageChange(e){
       setImage(e.target.value)
   }

   function handleTypeChange(e){
       setType(e.target.value)
   }

   function handlePetAdopt(){
   //map over pets ?
    //debugger
    //  setPets(adoptedPets)
     console.log(pets);
   }
 
     const displayedPets = pets.filter((pet) => 
         pet.name?.toLowerCase().includes(search.toLowerCase())
        )

    return (

    <div className="animals-page">
        <h2>Animals available to support and Adopt</h2>
        <h3>Add an Animal</h3>
           <br/>
           <form onSubmit={handleSubmit}>
               <input  type="text" onChange={handleNameChange} value={name} placeholder="Name"/>
               <input  type="text" onChange={handleImageChange} value={image} placeholder="Image URL"/>
               <select onChange={handleTypeChange} value={type}>
                  <option value="dog"> Dog</option>
                  <option value="cat"> Cat</option>
                  <option value="bird"> Bird</option>
               </select>
               <button>Submit</button>
           </form>
           
        <Search search={search} onSearchChange={setSearch} />
        
        <Filter change={handleChange}/>
                 
        <ItemList pets={displayedPets} onPetDelete={handleDelete} onAdopt={handlePetAdopt}/>

        <Adopted pets={displayedPets}/>
        {/* make Adopted as a child of animals */}

    </div>) 
}

export default Animals;