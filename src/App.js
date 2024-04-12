// import logo from './logo.svg';
import './App.css';
import About from './Camponants/About';
import Navbar from './Camponants/Navbar';
import Textform from './Camponants/Textform';
import React, {useState} from 'react'



function App() {
  const [mode, setmode] = useState('light')
  const toggleSwitch= ()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor='#1f1f1f'
    }
    else{
      setmode("light")
      document.body.style.backgroundColor='#fff'
    }
  }
  return (
    <>
      
      <Navbar title="textUtilities" aboutLinkText="About" mode={mode} toggleSwitch={toggleSwitch} />
      {/* <About /> */}
      <div className="container my-5">
        <Textform heading="Enter the  text you want to analyze" mode={mode}/>
      </div>
      
    </>

  );
}

export default App;
