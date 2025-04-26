import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Education from './Components/Education';
const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
     <Header/>
     <Home/>
     <About/>
     <Education/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
};

export default App;