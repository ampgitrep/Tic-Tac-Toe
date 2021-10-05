import { useState } from "react";


//who am i and what is my value? and how do I report interactions up to my boss
const Square = ({ id, value, onClick }) => {
  let newValue = ' ';
  const handleClick =() => {
    newValue = 'clicked';
  }
  
  return (

        <button
          
          onClick={handleClick}
          style={{
            paddingTop: '22px',
            paddingBottom: '22px',
            paddingLeft: '22px',
            paddingRight: '22px',
          }}
        >{newValue}
        </button> 
       
  )
}

export default Square;