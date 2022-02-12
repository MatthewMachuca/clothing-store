import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
const Item = () => {
  return (
    <div>
      <Card style={{ width: "18rem", alignItems: "center" , marginRight:"150px"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body style={{ padding: "50px" }}>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
