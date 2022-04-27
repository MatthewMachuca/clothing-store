import axios from "axios"

const AdminItem = (props) => {

const deleteItemHandler = (name) => {
    axios.delete(`http://localhost:8000/api/item${name}`).then(res => console.log(res.data))
}
const imgLink = `${props.item.picture}`
    return (
        <div>

            <p>
          
            <ul>
                <li>
                    Item Name: 
                {props.item.name}
                </li>
                <li>
                    Item Price: 
                {props.item.price}
                </li>
                <li>
                    Quantity in Stock: 
                {props.item.stock}
                </li>
                
            </ul>
            <img src={imgLink} width="200px" height="200px" ></img>
<button onClick={() => deleteItemHandler(props.item.name) } className="btn btn-outline-danger my-2 mx-1" style={{'borderRadius':'50px'}} > Delete Item From Store</button>
            </p>
        </div>
    )
}

export default AdminItem