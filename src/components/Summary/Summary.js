import React, { startTransition, useState } from 'react'
import Item from '../Item/Item';
import { Link, useNavigate } from 'react-router-dom';
import './Summary.css';
import { toast } from 'react-hot-toast';

function Summary(props) {
  const [clicked , setClicked] = useState(false);
  const [name , setName] = useState();
  const [seats , setSeats] = useState();
  const navigate = useNavigate();
  console.log(props.data);
  // var clicked = true;
  const handleClick = () => {
    setClicked(!clicked);
  }
  const handleBookClick = () => {
    if(!name || !seats){
      toast.error("Please fill correct details")
    }
    else {
      toast.success("Ticket Booked Successfully");
      setTimeout(() => {
        toast.success("Redirecting to home page");
        navigate('/');
      },2000);
    }
  }
  return (
    <div className='summary-form'>
      <div className='summary-div'>
        <div className='summary'>
          <img src={props.data.image.medium} />
          <div className='summary-info'>
            <p>{props.data.summary}</p>
            <div className='buttons'>
              <button onClick={handleClick} className='book-btn'>Book Ticket</button>
              <Link to='/'><button className='go-back'>Go Back</button></Link>
            </div>
          </div>
        </div>
      </div>
      { clicked && 
        <div className='form'>
          <form>
            <input type = "text" value = {props.data.name}/>
            <input type = "text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}/>
            <input type = "number" placeholder='Enter number of seats' onChange={(e)=>setSeats(e.target.value)}/>
          </form>
          <button onClick={handleBookClick}>Book</button>
        </div>
      } 
    </div>
  )
}

export default Summary