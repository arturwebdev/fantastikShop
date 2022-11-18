import React from 'react'
import './PopUpItem.css'

function PopUpItem({id,title,price,image}) {
  return (
    <div className='PopUpItem'>
        
    <div className='image'>
       <img src = {image} />
    </div>

 <div className='PopUpItemInfo'>
    
       <p>{title}</p>
       <h4>$ {price}</h4>         
        <span className='x' >X</span>

  </div>


 </div>
  )
}

export default PopUpItem