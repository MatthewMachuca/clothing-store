import './myCard.css'


const MyCard = (props) => {
    const imgLink = `${props.item.picture}`


    return (
<div class="card">
  <img src={imgLink} ></img>
  <h1>{props.item.name}</h1>
  <p class="price">{props.item.price}</p>
  <p>{props.item.description}</p>
  <p><button>Add to Cart</button></p>
</div>

    )
}

export default MyCard