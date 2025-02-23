import './App.css';
import './index.css'
import { Routes, Route} from "react-router-dom";
import { About } from './About';
import { Home } from './Home';
import { Projects } from './Projects';
import { Navbar } from './Navbar';
import React, {useRef} from 'react';
import { Footer } from './Footer';




function App() {
  const projectRef = useRef(null);

  return (
    <div className="App ">
      <section className="">
        <Navbar scrollToContact={() => projectRef.current?.scrollToContact()}/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>

        <Footer/>
        </section>
    </div>
  );
}

export default App;
