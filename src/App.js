import './App.css';
import SideBar from './components/SideBar/SideBar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
// import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';



function App() {
  return (
    // <Router>
    //   <div className="app-container">
    //     <SideBar />
    //     <div className="main-content">
    //       <Routes>
    //         {/* <Route path="/" element={<div className="home">Home Content</div>} /> */}
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/resume" element={<Resume />} />
    //         <Route path="/projects" element={<Projects />} />
    //         <Route path="/services" element={<Services />} />
    //         <Route path="/skills" element={<Skills />} />
    //         <Route path="/contact" element={<Contact />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>

    <div className="app-container">
      <SideBar />
      <div className="main-content">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        {/* <div id="resume">
          <Resume />
        </div> */}
        <div id="projects">
          <Projects />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
