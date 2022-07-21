import React from 'react'
import css from "./SubHeader.css"
import { Link } from 'react-router-dom'

export default function SubHeader() {
  return (
    <div className='sub-parent' >
       <Link to="/Shirt" style={{textDecoration:"none"}}> <div>Shirt</div></Link>
       <Link to="/Pant" style={{textDecoration:"none"}}> <div>Pant</div></Link>
      
    </div>
  )
}
