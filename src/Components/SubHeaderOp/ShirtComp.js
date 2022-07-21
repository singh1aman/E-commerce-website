import React from 'react'
import css from "../Card"

export default function ShirtComp({data}) {
  
  return (
    <div className='parent' style={{display:"inline-block"}}>
      <div className='card-container'>
        <div className='img-con'>
            <img src={data.image} className='card-img'></img>
        </div>
        <div className='content-con'>
            <div className='con-title'>
                {data.title}
            </div>
            <div className='card-subdiv'>
                <div>{data.price}</div>
                <div>{data.totalquantity}</div>
                <div>id:{data.id}</div>
            </div>
            <button className='card-btn'>Add to Cart</button>
            


        </div>

      </div>
      </div>
   
   
  )
}
