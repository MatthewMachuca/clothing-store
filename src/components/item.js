import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
const Item = () => {
  return (
    <div>
      <Card style={{ width: "18rem", alignItems: "center" , marginRight:"150px"}}>
        <Card.Img variant="top" src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/444975/item/goods_31_444975.jpg?width=750" />
        <Card.Body style={{ padding: "50px" }}>
          <Card.Title>Item Name</Card.Title>
          <Card.Subtitle> Price: ($19.99) </Card.Subtitle>
          <Card.Text>
            Full item description here.
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
