
import React, {useState} from "react"

function Form({handleSubmit}){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [type, setType] = useState("All") 

    function handleOnSubmit(e){
      e.preventDefault();
      const pet = {
        name: name,
        type: type, 
        image: image,
        likes: 0,
        donations: 0,
        isAdopted: false,
      };
        handleSubmit(pet)
        setName('')
        setImage('')

      }

      function handleImageChange(e){
        setImage(e.target.value)
      }
   
    function handleTypeChange(e){
       setType(e.target.value)
    }
    function handleNameChange(e){
       setName(e.target.value)
    }


    return(
       <div>
         <form onSubmit={handleOnSubmit}>
               <input  type="text" onChange={handleNameChange} value={name} placeholder="Name"/>
               <input  type="text" onChange={handleImageChange} value={image} placeholder="Image URL"/>
               <select onChange={handleTypeChange} >
                  <option value="Dog"> Dog</option>
                  <option value="Cat"> Cat</option>
                  <option value="Bird"> Bird</option>
               </select>
               <button>Submit</button>
            </form>
      </div>
    )
}

export default Form;