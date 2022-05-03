import Navigation from "./navigation";
import { Button } from "react-bootstrap";
import "./home.css";
import stockclothing from "./images/stockclothing.png";
const Home = () => {
  return (
    <div>
      <div >
        <h1> Better Clothing for the planet</h1>
        <h2>
          {" "}
          At Primal Clothing, we value the quality and sustainablility in a
          breathable clothing designed to find a forever home in your wardrobe.
        </h2>
      </div>
      <Button
        variant="outline-secondary"
        style={{
          marginLeft: "47%",
          marginRight: "20%",
          marginTop: "20px",
          marginBottom: "100px",
        }}
      >
        {" "}
        Shop All
      </Button>
      <img src={stockclothing}></img>

      <div className="footer">
        <h3> Email Newsletter Sign-Up</h3>
        <p>
          Be the first to know about our special offers, new product launches,
          and events
        </p>
        <form>
          <input type="text" placeholder="Enter Email"></input>
          
          <button>Sign-Up </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
