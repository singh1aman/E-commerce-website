import React from 'react'
import data from '../../Object'
import ShirtComp from './ShirtComp'
export default function Shirt() {
  const ShirtData = data.filter(item => item.type==="shirt")
  console.log(ShirtData)
  const mappedData = ShirtData.map(item=>{
    return <ShirtComp data={item}/>
  })
  return (
    <>
      {mappedData}
    </>
  )
}
