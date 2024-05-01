import { useState } from 'react';
import './nav.css';
import Logo from './Logo'
import { FiAlignJustify } from "react-icons/fi";


export default function Nav(){
  const today = new Date();
  const month = today.getMonth()+1 ;
  
  const day = today.getDate();
  const formattedDate = `${day < 10 ? '0' : ''}${day}`;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'Juan', 'July','August','September','October','November','December'];
  const dayOfWeek = days[today.getDay()];
  const month1 = months[today.getMonth()];
    
    return(
        <>
     
     <nav >
          <Logo/>

            <FiAlignJustify className="svgReact"/>
          
         

        
        </nav>
        <div className="calender">
          <p>Today</p>
        

        <p className="calender-item" >{month1} {formattedDate} {dayOfWeek}</p>
        </div>
       
        </>
      
  )
}