import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getNumber,getType,fetchText  } from '../redux/textSlice';
import { useSelector } from 'react-redux';

function Input() {

const item=useSelector(state=>state.text.number);
const item_type=useSelector(state=>state.text.type);
const dispatch=useDispatch();

console.log( item)
console.log(item_type)

useEffect(()=>{
    dispatch(fetchText({number:item,type:item_type}))
},[dispatch, item,item_type])
  return (
    <div  className='input'>
        <div className='number'>
        <label > paragraf</label>
         <input 
         type="number" 
         value={item}
         onChange={(e)=>dispatch(getNumber(e.target.value))} 
         
         />
         </div>
         <div className='text'>
        <label > paragraf</label>
         <select className='option' onChange={(e)=>dispatch(getType(e.target.value))}>
             <option value="text">Text</option>
             <option value="Html">Html</option>
         </select>
         </div>

    </div>
  )
}

export default Input