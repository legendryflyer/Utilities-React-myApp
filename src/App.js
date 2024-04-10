// import logo from './logo.svg';
import './App.css';
import Navbar from './Camponants/Navbar';
import Textform from './Camponants/Textform';


function App() {
  return (
    <>
      
      <Navbar title="textUtilities" aboutLinkText="About" />
      <div className="container my-5">
        <Textform heading="Enter the  text you want to analyze"/>
        
      </div>
      
    </>

  );
}

export default App;
