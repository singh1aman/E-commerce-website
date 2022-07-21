import React from 'react'
import data from '../../Object'
import PantComp from './PantComp'
export default function Pant() {
  const PantData = data.filter(item => item.type==="pant")
  console.log(PantData)
  const mappedData = PantData.map(item=>{
    return <PantComp data={item}/>
  })
  return (
    <>
      {mappedData}
    </>
  )
}
