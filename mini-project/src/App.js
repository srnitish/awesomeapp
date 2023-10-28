import './App.css';
import Home from './Components/Home';
import Navbar  from './Components/Navbar';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import Footer from './Components/Footer';

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
      showAlert("Dark Mode has been enabled", "success");
    }else{
      setMode("black");
      document.body.style.backgroundColor ="#fff";
      showAlert("Light Mode has been enabled", "success");
    }
  }


    return (
      <div>
        <Navbar title= "TextTransform" mode={mode} switchMode={switchMode}  disabledBtn="This Btn is Disable"/>
        <Alert alert = {alert}/>
        <Home mode={mode} showAlert = {showAlert}/>
        <Footer/>
      </div>
      
    );
}

export default App;