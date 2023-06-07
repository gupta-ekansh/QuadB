import React from 'react'
import Item from '../Item/Item';
import './items.css';

function Items(props) {
    // console.log("Props: " , props);
    var items = props.data;
    var handleClick = props.handleClick;
    // console.log(handleClick)
  return (
    <div className='items'>
            {items.map((item)=>(
                    <Item data = {item} handleClick = {handleClick}/>
            ))}
    </div>
  )
}

export default Items