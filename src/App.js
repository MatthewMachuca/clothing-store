import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation";
import Item from "./components/item";
import Catolog from "./components/catolog";
import Home from "./components/home";
import Admin from "./components/admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
  <BrowserRouter>
  <Navigation/>
  <div>

    <Routes> 
    <Route exact path='/' element= {<Home/>}/>
    <Route path='/catolog' element= {<Catolog/>}/>
    <Route path='/trending' element= {<Catolog/>}/>
    <Route path='/admin' element= {<Admin/>}/>
    </Routes>
    
  </div> 
   </BrowserRouter>
  );
};

export default App;
