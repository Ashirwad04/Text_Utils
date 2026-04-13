import Navbar from './componenets/Navbar';
import './App.css';
import Textform from './componenets/Textform';

function App() {


  return (
   <>
    
<Navbar title="Text Utils"aboutText="About"/>

  <div className="container my-3">

    <Textform heading="Enter the test to Analyze Below"/>

  </div>
   </>
  );
}

export default App;
