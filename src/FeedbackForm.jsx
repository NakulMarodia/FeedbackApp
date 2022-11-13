import React,{useState} from 'react'
import Card from './Card'
import Button from './Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
    const [rating,setRating] = useState(10)
    const [text,setText] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState(" ")

    const handleTextChange =(e) =>{

        if(text === " "){
            setMessage(null)
            setBtnDisabled(true)
        } else if (text !== " " && text.trim().length<10){
            setBtnDisabled(true)
            setMessage("Text must be greater than 10 character")
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value);
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback = {
                rating,
                text,
            }

            handleAdd(newFeedback)

            setText("")
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our services.?</h2>
            <RatingSelect select={(rating)=> setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} value={text} type="text" placeholder='Write review'/>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm