
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm'; 
import React, { useState } from 'react';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
   } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
  }
 
 const toggleMode=()=>{
if(mode==='light'){
  setMode('dark');
  document.body.style.background='#042743';
  showAlert("Dark mode has been enable","success")
  document.title="TextUtils - Dark mode";
}
else{
  setMode('light');
  document.body.style.background='white';
  showAlert("Light mode has been enable","success")
  document.title="TextUtils - Light mode";

  // setInterval(() => {
  //   document.title='TextUtils is Amezing Mode';
  // }, 2000);
  // setInterval(() => {
  //   document.title='Install TextUtils Now';
  // }, 1500);
}
  }
  return (
    <Router>
   <>
  
   <div>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  
  <div className="container my-3">
  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/>
          </Route>
  </Switch>
    </div>
  </div>
  
   </>
   </Router>
     
  );
}

export default App;
