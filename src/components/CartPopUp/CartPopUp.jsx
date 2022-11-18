import './CartPopUp.css'
import React from 'react'
import PopUpItem from '../PopUpItem/PopUpItem';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/slices/users/usersSlice';

import {motion} from 'framer-motion'

function CartPopUp({closePopUp}) {
  const {currentUser}  = useSelector(selectUsers) 
    const handleClick = (e) => {
       if(e.target.id !== 'content'){
        closePopUp()
       }
    }
  return (
    
    <motion.div 
    viewport={{
      once:true,
      // amount:0.5
  }}
  initial = {{
      opacity:0,
      scale:0.5,
  }}
  whileInView ={{
      opacity:1,
      scale:1,
      transition:{
          type:'spring',
          bounce:0.4,
          duration:1.5,
          delay:0
      }
  }}
    className='CartPopUp' onClick = {handleClick}>{/* որ div-ի ցանկացած տեղ սեղմելիս աշխատի*/}
        
        <span>X</span>
        <div id = 'content' className='cartList'>
   
           <div className='list'>
            {   
           currentUser?.cart.map(item => <PopUpItem  key = {item.id}{...item}/>)
            }   
        
            </div>                    
        </div>
    </motion.div>
)
}

export default CartPopUp


