import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
     <Header/>
     <Home/>
     <About/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
};

export default App;