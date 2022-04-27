import { Form , Button, } from "react-bootstrap"
import axios from "axios"
import { useState, useEffect } from "react"
import "./admin.css"



import AdminListView from "./adminListView"

const Admin = () => {

  const [inventoryList, setInventoryList] = useState([{}])

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock]= useState('')
  const [trending, setTrending] = useState(false)
  const [picture, setPicture] = useState('')
  
 // Read all inventory
  useEffect(() => {
    axios.get('http://localhost:8000/api/item')
    .then( res => {
      setInventoryList(res.data)
    })
  },[name])



const addItemHandler = () => {
  axios.post('http://localhost:8000/api/item',
  {'name':name,
'description':description,
'price':price,
'stock': stock,
'trending':trending,
'picture':picture}).then(res=>window.location.reload())

 
}

const handleTrending = () => {
  setTrending(!trending)

}

    return (
        <div><h2 className="adminH2"> Add an item to the store</h2>
        <Form className="myForm">

<Form.Group className="mb-3" >
    <Form.Label>Item Name</Form.Label>
    <Form.Control type="text" placeholder="Crew Cut Shirt - Red" onChange={event => setName(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Item Description</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Enter the item description." onChange={event => setDescription(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Enter Price</Form.Label>
    <Form.Control type="text" placeholder="Example: 19.99"  onChange={event => setPrice(parseFloat(event.target.value))}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Quantity to Add to Inventory</Form.Label>
    <Form.Control type="text" placeholder="Example: 25"  onChange={event => setStock(parseInt(event.target.value))}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Link to Product Image</Form.Label>
    <Form.Control type="text" placeholder="Example:https://i.imgur.com/JrJRosU.png" onChange={event => setPicture(event.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Trending Item: YES </Form.Label>
    <input type="checkbox" className="check" onChange={handleTrending} />
  </Form.Group>

  <Button variant="secondary" className="formButton" onClick={addItemHandler}  >Submit</Button>
        </Form>



        <div>
          <h2>
            Inventory list
          </h2>
         <div>
           <AdminListView inventoryList={inventoryList}/>
         </div>
        </div>
        </div>
    )
}
export default Admin