import './catolog.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import CatologListView from "./catologListview";
const Catolog = () => {
  const [inventoryList, setInventoryList] = useState([{}])

  useEffect(() => {
    axios.get('http://localhost:8000/api/item')
    .then( res => {
      setInventoryList(res.data)
    })
  },[])


  return (
<div className='parent' > 
  <CatologListView  inventoryList={inventoryList}/>
 
       
  </div>
  
             
  );
};
export default Catolog;
