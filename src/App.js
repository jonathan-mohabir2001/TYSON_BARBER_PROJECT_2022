import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import TopNav from './components/navbar/TopNav';

function App() {
  /*
  APP WILL JUST CONTAIN ROUTING AND NAVBAR TO LINK TO OTHER PAGES 

  */
  return (
    <div className="App">
      <div>
        <TopNav />
      </div>

      <div>
        <Routes>
          <Route path="/home" element={<AboutMe />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
      
        </Routes>
      </div>
    </div>
  );
}

export default App;
