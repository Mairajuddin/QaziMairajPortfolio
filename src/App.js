import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner.js';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Projects } from './components/Projects';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<Banner />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects/>}/>

          </Routes>
         
        
          
          
          <Footer />
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
