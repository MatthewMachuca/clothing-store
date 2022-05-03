import { useState,useEffect } from "react";
import CatologListView from "./catologListview";
import axios from "axios";
const Trending = () => {

    const [inventoryList, setInventoryList] = useState([{}])

    useEffect(() => {
      axios.get('http://localhost:8000/api/item')
      .then( res => {
        const trend = res.data.filter(i => (i.trending == true))

        setInventoryList(trend)
      })
    },[])

    return(
        <div className='parent' > 
  <CatologListView  inventoryList={inventoryList}/>
 
       
  </div>
    )
}

export default Trending;