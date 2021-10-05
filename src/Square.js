import { useState } from "react";


//who am i and what is my value? and how do I report interactions up to my boss
const Square = ({ id, value, onClick }) => {
  const handleClick = () => {
    onClick();
  }
  
  
  return (

        <button
          
          onClick={handleClick}
          id={id}
          style={{
            paddingTop: '22px',
            paddingBottom: '22px',
            paddingLeft: '22px',
            paddingRight: '22px',
          }}
        >{value}{id}
        </button> 
       
  )
}

export default Square;