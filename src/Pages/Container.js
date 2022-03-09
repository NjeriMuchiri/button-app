import React from "react";
import '../App.css';
import {useState} from 'react';
import menuData from "../Components/menudata";

const ButtonContainer = () =>{
     const [menu,setMenu] = useState([]);
     const [btn,setBtn] = useState();

    
     const handleChange =(e) =>{
         setBtn(e.target.value);
     
          setMenu(menuData.map((item) =>item))
      }
    //  console.log(menuData);
    

return(
    <>
    <div className="header">
      <h3>LaCafe Menu</h3>
    </div>
    <div className="section-menu">
 { btn || menu.map(item =>(
     <article key = {item.id}>
     <img 
     src={item.image}
     alt={item.category}
     />
     <p>{item.text}</p>
     </article>
 ))}

        </div>
        
            <button className="button-container" type="button" onClick={handleChange}>Open</button>

    </>
)
};
export default ButtonContainer;