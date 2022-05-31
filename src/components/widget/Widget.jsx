import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";


// function Widget({type}) {
    const Widget =({type})=>{
    let data;

    switch(type){
        case "user":
            data={
              title:"USERS",
              isMoney: false,
              link: "See all users",
              icon:(
                   <PersonOutlinedIcon 
                   
                   />
              )
            };
            break;

         case "order":
             data={
                 title: "ORDER",
                 isMoney: false,
                 link: "see all users",
                 icon:(
                     <ShoppingCartOutlinedIcon />
                 )
             }   
             break;

         case "earning":
             data={
                 title:"EARNING",
                 isMoney: true,
                 link: "view net earnings",
                 icon:(
                     <MonetizationOnOutlinedIcon />
                 )
             }  
             break;
             
         case "balance":
             data={
                 title:"BALANCE",
                 isMoney:true,
                 link:"view all earnings",
                 icon:(
                     <AccountBalanceWalletOutlinedIcon />
                 )
             }    
             break;

             default: break;2``
    }

console.log(data)
  return (
    <div className='widget'>
       <div className="left">
           <div className="title">{data.title}</div>
           <div className="counter">100</div>
           <div className="link">link</div>
       </div>


       <div className="right">
           <div className="percentage positive">
               <KeyboardArrowUpIcon />
               20%

           </div>
           <div className="icon">
               {/* icon */}
               {data.icon}
           </div>
       </div>
    </div>
  )
}

export default Widget