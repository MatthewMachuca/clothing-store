import axios from "axios"

const AdminItem = (props) => {

const deleteItemHandler = (name) => {
    axios.delete(`http://localhost:8000/api/item${name}`).then(res => console.log(res.data))
}

    return (
        <div>

            <p>
            <span style={{fontWeight: 'bold, underline'}}> {props.item.name} </span>
            {props.item.price}
<button onClick={() => deleteItemHandler(props.item.name) } className="btn btn-outline-danger my-2 mx-1" style={{'borderRadius':'50px'}} ></button>
            </p>
        </div>
    )
}

export default AdminItem