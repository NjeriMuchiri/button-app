import React from "react";
import '../App.css';
import {useState} from 'react';
import menuData from "../Components/menudata";

const ButtonContainer = () =>{
     const [menu,setMenu] = useState([]);
     const [btn,setBtn] = useState('');

    
     const handleChange =(e) =>{
        //  setBtn(e.target.value)
         e.preventDefault();
          setBtn(menuData.map((item) =>item));
          setMenu(menuData[Math.floor(Math.random() * menuData.length - 1)]);
      }
     console.log(menu);
    
return(
    <>
    <div className="header">
      <h3>LaCafe Menu</h3>
    </div>
    <div className="section-menu">
 {menu.length !== 0 && btn.map(item =>(
     <article className="menu-place" key = {item.id}>
         <h1 className="foods">{item.category}</h1>
     <img className="image-sect"
     src={item.image}
     alt={item.category}
     />
     <p className="text-abt">{item.text}</p>
     </article>
 ))}
            <button className="button-btn" type="button" onClick={handleChange}>Surprise Meal</button>
</div>
    </>
)
};
export default ButtonContainer;