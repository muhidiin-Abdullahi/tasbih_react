import React from 'react'
import { useState } from 'react'

const head = () => {
   const [count, setcount] = useState(null)
   const [TextColor, SettextColor] = useState( )

   
const changeColor = () => {
   SettextColor('blue');
}
   

   function decrementCount(){
      if(count > 0){
         setcount(count -1 )
      }
      else{
         alert("0")
      }
      if(count === 11){
         SettextColor('red')
      }else{
         SettextColor('black')
      }
      
   }
   function IncerimentCount(){
      setcount(count +1)

      if(count === 9){
         SettextColor('red')
      }else{
         SettextColor('black')
      }
      
      
   }

   function ResetCount(){
      setcount(0)
   }
  return (
    <div className='AllButtons'>
      <button onClick={decrementCount} className='btn'> - </button>
      <span style={{color : TextColor}} className='span'>{count}</span>
      <button onClick={IncerimentCount} className='btn'> + </button> <br /> <br />

      <button onClick={ResetCount} className='Reset'>Reset</button>
      

    </div>
  )
}

export default head

