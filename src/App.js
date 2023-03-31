import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Blog from './components/Blog';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Services />
    <Blog />
    </>
  );
}

export default App;
