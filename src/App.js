import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
     <Navbar />
      <Home/>
      <Services/>
    </div>
  );
}

export default App;
