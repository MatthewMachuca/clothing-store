import { Form , Button} from "react-bootstrap"
import "./admin.css"
const Admin = () => {
    return (
        <div><h2 className="adminH2"> Add an item to the store</h2>
        <Form className="myForm">

<Form.Group className="mb-3" >
    <Form.Label>Item Name</Form.Label>
    <Form.Control type="text" placeholder="Crew Cut Shirt - Red" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Item Description</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Enter the item description." />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Quantity to Add to Inventory</Form.Label>
    <Form.Control type="text" placeholder="Example: 25"  />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Link to Product Image</Form.Label>
    <Form.Control type="text" placeholder="Example:https://i.imgur.com/JrJRosU.png"  />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Trending Item: YES </Form.Label>
    <input type="checkbox" className="check" />
  </Form.Group>

  <Button variant="secondary" className="formButton">Submit</Button>
        </Form>
        </div>
    )
}
export default Admin