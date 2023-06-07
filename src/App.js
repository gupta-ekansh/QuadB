import { useEffect, useState } from 'react';
import './App.css';
import Items from './components/Items/Items';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Summary from './components/Summary/Summary';
import {Toaster} from 'react-hot-toast';

function App() {
  const [data , setData] = useState([]);
  const [item , setItem] = useState([]);
  const fetchUserData = async () => {
    await fetch('https://api.tvmaze.com/search/shows?q=all')
    .then(response => {
      return response.json();
    })
    .then(res => {
      setData(res);
    });
  console.log(data);
  }
  useEffect(()=>{
    fetchUserData();
  },[])
  const handleSummaryClick = (data) => {
    setItem(data);
    console.log('Item: ' , item);
  }
  return (
    <div className="App">
      <Toaster position='top-right'/>
      <Router>
        <Routes>
          <Route path = '/summary' element = {<Summary data = {item}/>}/>
          <Route path = '/' element = {<Items data = {data} handleClick = {handleSummaryClick} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
