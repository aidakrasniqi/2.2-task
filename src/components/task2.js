import React, { useState } from 'react';
import "./task2.scss";
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';


const Task2 = () => {
    const [show, setShow]=useState(true)
    return (
        <div className="task2">
         <div className="div1" onClick={()=>setShow(!show)}>
        <button >Why park a domain name in Parkname ? </button>
        <span>{show?<IoIosArrowUp/>:<IoIosArrowDown/>}</span>
    </div>
    {show?<div className="div2"> Parkname is the leading industry standart for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.</div> :null}
        </div>
    );  
    };
export default Task2;