import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <div className='App-header'>
          <Routes>
            <Route path='/portfolio-website' exact element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          </div>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
