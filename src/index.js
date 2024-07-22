import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Info from "./component/Info";
import About from "./component/About";
import Intrests from "./component/Intrests";
import Footer from "./component/Footer";
function App(){
  return(
    <div className="card-container">
      <div className="card">
        <Info/>
        <About/>
        <Intrests/>
        <Footer/>
      </div>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);