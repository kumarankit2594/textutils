//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const[greenMode, setGreenMode] = useState(false);
  const[darkMode, setdarkMode] = useState(false);
  const showAlert = (message, type)=>{

    setAlert({
      msg:message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleGreenMode = ()=>{

    if (mode === 'light' || darkMode === true){
      
      setGreenMode(true);
      setdarkMode(false);
      setMode('dark');
      document.body.style.backgroundColor = '#20c997';
      showAlert("Green Dark Mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
    }
    else {

      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      setGreenMode(false);
      setdarkMode(false);
      document.title = "TextUtils - Light Mode";
    }
    
  }

  const toggleMode = ()=>{

    if (mode === 'light' || greenMode === true){
      setMode('dark');
      setdarkMode(true);
      setGreenMode(false);
      document.body.style.backgroundColor = '#0d032e';
      showAlert("Dark Mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
    }
    else {

      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      setGreenMode(false);
      setdarkMode(false);
      document.title = "TextUtils - Light Mode";
    }
    
  }

  return (
    //jsx fragment
    <> 
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleGreenMode={toggleGreenMode} toggleMode={toggleMode}/>
    
    <Alert alert={alert}/>
    <div className="container my-3">
    
    <TextForm heading="Enter your text to analyze" mode={mode} btnType={greenMode === true?"success":"primary"} showAlert={showAlert}/>
    {/* <Routes> */}
          {/* <Route exact path="/about"  element={<About/>}/> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} btnType={greenMode === true?"success":"primary"} showAlert={showAlert}/>}/> */}
            
          
    
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
