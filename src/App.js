import {v4 as uuidv4} from 'uuid'
import './App.css';
import { useState } from 'react';
import Header from './Header';
import FeedbackData from './FeedbackData';
import FeedbackList from './FeedbackList';
import FeedbackItem from './FeedbackItem';
import FeedbackStats from './FeedbackStats';
import FeedbackForm from './FeedbackForm';

function App() {

  const [feedback,setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) =>{
    if (window.confirm("are you sure")){
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
} 

const addFeedback = (newFeedback) =>{
  newFeedback.id = uuidv4()
  setFeedback([newFeedback,...feedback])
}

  return (
    <>
    <Header/>
    <div className='container'>
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete = {deleteFeedback} />
    </div>
    </>
  );
}

export default App;
