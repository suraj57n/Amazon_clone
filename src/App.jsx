import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Checkout from "./Checkout";
import Home from "./Home"
function App() {
  return (
   <Router>
     <div className="App">
      <Header/>
       <Routes>
         <Route path="/checkout" element={<Checkout/>} />
         <Route path="/login" element={<Login/>}/>
         <Route path="/" element={<Home/>}/>
       </Routes>
     </div>
   </Router>
  );
}

export default App;
