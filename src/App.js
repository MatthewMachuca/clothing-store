import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation";
import Item from "./components/item";
import Catolog from "./components/catolog";
const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Catolog></Catolog>
    </div>
  );
};

export default App;
