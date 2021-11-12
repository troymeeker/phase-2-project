import React, { useState } from "react";
import ItemList from "./ItemList";

function Home(){
    const [pets, setPets] = useState([]);
    
    return (
    <div>
       <ItemList pets={pets}/>
        
    </div>)
}

export default Home;