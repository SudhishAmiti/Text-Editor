import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import About from './components/About';
// set and setmode are functions....
function App() {
  const [mode,setmode] = useState('light');
  const[alert,setalert] = useState(null);
  //here toggleMode arrow function sets the mode....
  const toggleMode=()=>{
    if(mode==='light'){

      setmode('dark')
      document.body.style.background = 'grey';
      showAlert("this is dark mode","success");
      document.title = "TextEditor-dark mode";
    }
    else{
      setmode('light')
      document.body.style.background = 'white';
      showAlert("this is light mode","success");
      document.title = "TextEditor-light mode";
    }
  };
  const showAlert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
  }
  return (
    <>
    <Router>
      <Navbar title="TextEditor" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert = {showAlert} heading="Enter the text to analyse" mode = {mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
