import React,{useState} from 'react'
import Card from './Card'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item , handleDelete}) {

  // const [count,setCount] = useState(9);
  // const [text,setText] = useState("Hello worldd")

  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button className='close' onClick={()=>handleDelete(item.id)}><FaTimes color='purple'/></button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem