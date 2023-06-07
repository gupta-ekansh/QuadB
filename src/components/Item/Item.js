import React from 'react'
import './item.css';
import { useNavigate } from 'react-router-dom';
import Summary from '../Summary/Summary';

function Item(props) {
  const navigate = useNavigate();
    // console.log("props" , props);
    var data = props.data.show;
    var handleClick = props.handleClick;
    // console.log(data);

    // var summary = data.summary;
    const stripHtml = (htmlString) =>{
        let tmp = document.createElement('p');
        tmp.innerHTML = htmlString;
        return tmp.textContent || tmp.innerText || '';
    }
    data.summary = stripHtml(data.summary);
    // console.log(newSummary);


    const handleClickOnSummary = (data) => {
      handleClick(data);
      navigate('/summary');
    }
  return (
    <div className='item'>
        <img src = {data.image.medium}/>
        <div className='info'>
            <p><b>Movie Name: </b>{data.name}</p>
            <p><b>Language: </b>{data.language}</p>
            <p><b>Date Premiered: </b>{data.premiered}</p>
            <button onClick={() => handleClickOnSummary(data)} className='btn'>Summary</button>
        </div>
    </div>
  )
}

export default Item