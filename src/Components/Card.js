import React from 'react'
import './Card.css'
import data from '../Object'

export default function Card({ inputState }) {
  console.log(data)
    // console.log(inputState);
    let filteredData =data.filter((ele)=>ele.type.includes(inputState.inputState.toLowerCase()))
    
    
    return(
      <>
      <div className='parent'>
      {
        filteredData.length === 0 ?
        data.map((ele)=>{
          return(
            <div className='card-container' key={ele.id}>
            <div className='img-con'>
              <img src={ele.image} className='card-img'></img>
            </div>
            <div className='content-con'>
              <div className='con-title'>
                {ele.title}
              </div>
              <div className='card-subdiv'>
                <div>{ele.price}</div>
                <div>{ele.totalquantity}</div>
                <div>id:{ele.id}</div>
              </div>
              <button onClick={()=>inputState.addToCart(ele)} className='card-btn'>Add to Cart</button>

            </div>
        </div>
          )
        })
        :
        filteredData.map((ele) =>{
          return(
            <div className='card-container' key={ele.id}>
            <div className='img-con'>
              <img src={ele.image} className='card-img'></img>
            </div>
            <div className='content-con'>
              <div className='con-title'>
                {ele.title}
              </div>
              <div className='card-subdiv'>
                <div>{ele.price}</div>
                <div>{ele.totalquantity}</div>
                <div>id:{ele.id}</div>
              </div>
              <button  onClick={()=>inputState.addToCart(ele)} className='card-btn'>Add to Cart</button>

            </div>
        </div>

          )
        })
      }
      </div>
      </>
    )
}
