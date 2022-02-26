import { BsFillCartFill } from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Badge } from "react-bootstrap";


const Navigation = () => {
  return (
    <div>
      <Navbar bg="white" variant="light" style={{"borderBottom":"2px solid rgb(0,0,0)"}}>
        <Container>
          <Navbar.Brand href="#home" style={{"fontSize":"30px" , "fontFamily":"Inter", "fontWeight":"Bold"}}>Primal Clothing</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#catolog" >Catolog</Nav.Link>
            <Nav.Link href="#trending" >Trending</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-dark">
              Cart
              <BsFillCartFill /> <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">items in cart</span>
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};
export default Navigation;
