import { useEffect } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import handleScroll from './Utilities/handleScroll';
import initilizeAutoTyping from './Utilities/autoTypeText';
import Video from './Components/Video';
import Feedback from './Components/Feedback';


function App() {

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', initilizeAutoTyping)
  }, []); 

  return (
    <div className="app-container" onScroll={()=>{console.log('Scroling')}}>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      {/* <Peers/>  */}
      <Video/>
      <Feedback/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
