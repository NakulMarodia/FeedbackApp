import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback , handleDelete}) {
  return (
    <div className='feedback-list'>
        {feedback.map((item)=>(
          <div key={item.id}>
          <FeedbackItem item={item} handleDelete={handleDelete}/>
        </div>
        )
        )}
    </div>
  )
}

export default FeedbackList