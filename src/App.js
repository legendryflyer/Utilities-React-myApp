// import logo from './logo.svg';
import './App.css';
// import About from './Camponants/About';
import Alert from './Camponants/Alert';
import Navbar from './Camponants/Navbar';
import Textform from './Camponants/Textform';
import React, {useState} from 'react'



function App() {
  const [mode, setmode] = useState('light')
  const [alertMassage, setalertMassage] = useState(false)

  const showAlertMassage =(massage,type)=>{
    setalertMassage({
      massage:massage,
      type:type

    })
    setTimeout(()=>{
      setalertMassage(false)
    },2000)
  }



  const toggleSwitch= ()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor='#1f1f1f'
      showAlertMassage(" Dark Mode is turned on","success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor='#fff'
      showAlertMassage(" Light Mode is turned on","danger")
    }
  }
  return (
    <>
      
      <Navbar title="textUtilities" aboutLinkText="About" mode={mode} toggleSwitch={toggleSwitch} />
      <Alert alertMassage={alertMassage}/>
      {/* <About /> */}
      <div className="container my-5">
        <Textform showAlertMassage={showAlertMassage} heading="Enter the  text you want to analyze" mode={mode}/>
      </div>
      
    </>

  );
}

export default App;
