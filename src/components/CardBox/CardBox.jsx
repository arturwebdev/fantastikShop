import { useNavigate } from 'react-router-dom'
import "./CardBox.css"
import IMG from '../../img'

function CardBox({...product}) {//{id,img, title, price, disc,body}hanel
    const navigate = useNavigate()
  return (
      <div className='CardBox'>
          <a ><img   onClick={() => navigate(`${product.id}`)}  src={product.image} alt="" /></a>
        
          <div className='text'>
              <h4>{product.category}</h4>
              <span>{product.title}</span>
              <div className='prices'>                     
              <del>$ {product.oldPrice}</del>  
              <p>$ {product.price}</p>       
              </div>
              
          </div>
      </div>
  )
}

export default CardBox