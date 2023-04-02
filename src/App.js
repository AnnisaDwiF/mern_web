import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Services />
    <Blog />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
