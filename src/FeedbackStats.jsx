import React from 'react'

function FeedbackStats({feedback}) {

    let average = feedback.reduce((acc,curr)=>{
        return acc+curr.rating;
    },0)/feedback.length;

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} reveiws</h4>
        <h4>Average Rating:{average}</h4>
    </div>
  )
}

export default FeedbackStats