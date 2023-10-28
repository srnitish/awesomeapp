import './App.css';
import Home from './Components/Home';
import Navbar  from './Components/Navbar';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("black");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },2000)
  }

  const switchMode = () =>{
    if(mode === "black"){
      setMode("white");
      document.body.style.backgroundColor ="#000";
      showAlert("This is Test Alert for enable Dark Mode", "success");
    }else{
      setMode("black");
      document.body.style.backgroundColor ="#fff";
      showAlert("This is Test Alert for enable Light Mode", "success");
    }
  }
    return (
      <Router>
      <div> 
          <Navbar title= "My New App" mode={mode} switchMode={switchMode}/>
          <Alert alert={alert}/>
          <Routes>
            <Route extact path="/" element={<Home mode={mode} showAlert={showAlert}/>}/>
            <Route extact path="/About" element={<About/>}/> 
          </Routes>
      </div>
      </Router>
    );
}

export default App;