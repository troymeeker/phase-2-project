import React, { useState } from "react";


function Item({pet, onPetDelete, onPetAdopt }){

    const {id, name, image } = pet;
    const [like, setLike] = useState(0);
    const [donate, setDonate] = useState(0);
    const [isAdopted, setisAdopted] = useState(false); 
    
    function handleDonate(){
        setDonate((donate) => donate + 1)
    }

    function handleDonateFive(){
         setDonate((donate) => donate + 5)
    }

    function handleDonateTen(){
        setDonate((donate) => donate + 10)
    }

    function handleLike(){
        setLike((like) => like + 1);
    }

    function handleAdopt(){
        setisAdopted((isAdopted) => !isAdopted)
       fetch(`http://localhost:3000/pets/${id}`, { 
            method: "PATCH",  
            headers: {
                "Content-type": "application/json"
            }, 
             body: JSON.stringify({isAdopted: true})
           })
       .then((resp) => resp.json())
       .then((adoptedPet) => onPetAdopt(adoptedPet)
        //    setisAdopted(data)
           
        )}

function handleDelete(){
          fetch(`http://localhost:3000/pets/${id}`, {
              method: "DELETE", 
          })
         onPetDelete(id)
       
      }

    return( 
        <div className="grid-item ">
            <img src={image} alt={name} className="grid-img"/>
            <h4> {name} </h4>
            <button onClick={handleLike}>Like</button>
            <h4> {like} Likes</h4>
            <h4>$ {donate} donated to help {name} find a forever home</h4>
            <button onClick={handleDonate}>Donate $1</button>
            <button onClick={handleDonateFive}>Donate $5</button>
            <button onClick={handleDonateTen}>Donate $10</button><br/>
            { isAdopted ? (
              <button className="adopted" >I've been Adopted!</button>
               )  : (
                <button onClick={handleAdopt}>Adopt Me!</button>
               )}
               <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Item;