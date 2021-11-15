import React, { useState } from "react";


function Item({pet}){
    const {name, image} = pet;
    const [like, setLike] = useState(0);
    const [donate, setDonate] = useState(0);
    const [notAdopted, setNotAdopted] = useState(true); 

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
    function handleToggleAdopt(){
        setNotAdopted((notAdopted) => !notAdopted)
        //Post req, make adopted pet appear in adopted animals component
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
           {notAdopted ? (
               <button onClick={handleToggleAdopt}>Adopt Me!</button>
               )  : (
                   <button className="adopted" onClick={handleToggleAdopt}>I've been Adopted!</button>
               )}
        </div>
    )
}

export default Item;