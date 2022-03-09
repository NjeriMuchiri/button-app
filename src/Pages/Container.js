import React from "react";
import '../App.css';
import {useState} from 'react';
import menuData from "../Components/menudata";

const ButtonContainer = () =>{
     const [menu,setMenu] = useState([]);
     const [btn,setBtn] = useState('');

    
     const handleChange =(e) =>{
         e.preventDefault();
         setBtn(menuData[Math.floor(Math.random() * menuData.length - 1)]);
          setMenu(menuData.map((item) =>item))
      }
     console.log(menuData);
    
return(
    <>
    <div className="header">
      <h3>LaCafe Menu</h3>
    </div>
    <div className="section-menu">
 { btn !== 0 && menu.map(item =>(
     <article className="menu-place" key = {item.id}>
     <img className="image-sect"
     src={item.image}
     alt={item.category}
     />
     <p className="text-abt">{item.text}</p>
     </article>
 ))}
        
            <button className="button-btn" type="button" onClick={handleChange}>Special Order</button>
</div>
    </>
)
};
export default ButtonContainer;