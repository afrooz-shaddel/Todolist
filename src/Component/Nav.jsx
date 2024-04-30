import { useState } from 'react';
import './nav.css';
import Logo from './Logo'
import { FiAlignJustify } from "react-icons/fi";
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

export default function Nav(){
    const[currentDate , setCurrentDate]=useState(getDate())
    
    return(
        <>
     
     <nav >
          <Logo/>

            <FiAlignJustify className="svgReact"/>
          
         

        
        </nav>
        <div className="calender">
          <p>Today</p>
          <p className="data">{currentDate}</p>
        </div>
       
        </>
      
  )
}