import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
// import Logo from '../assets/img/Logo1.png';
import NavIcon1 from '../assets/img/nav-icon1.svg'
import NavIcon2 from '../assets/img/nav-icon2.svg'
import NavIcon3 from '../assets/img/nav-icon3.svg'
import { Linkedin, Facebook } from 'react-bootstrap-icons';
// import Resume from '../assets/Docs/QaziMairaj-Resume.pdf';
// import DownloadIcon from '../assets/img/DownloadIcon.png'

import { Download } from 'react-bootstrap-icons'



export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);

  }, [])
  const onUpdateActivrlink = (value) => {
    setActiveLink(value);
  }
  return (

    <Navbar expand="md" className={`myNavbar ${scrolled ? "scrolled" : ""}`} >
      <Container >
        <Navbar.Brand href="/home">
          {/* <img src={Logo} alt="logo" className='logoimg' /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"   >
            <Link to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivrlink('home')} style={{ fontSize: '25px', fontWeight: 'bold', marginLeft: '50px',color:'white', textDecorationLine:'none' }}  rel="noopener noreferrer">Home</Link>
            <Link to="/skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivrlink('skills')} style={{ fontSize: '25px', fontWeight: 'bold', marginLeft: '50px', color:'white', textDecorationLine:'none'}} >Skills </Link>
            <Link to="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivrlink('projects')} style={{ fontSize: '25px', fontWeight: 'bold', marginLeft: '50px',color:'white', textDecorationLine:'none' }} >Projects</Link>
            <Link to="/contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivrlink('contact')} style={{ fontSize: '25px', fontWeight: 'bold', marginLeft: '50px',color:'white', textDecorationLine:'none' }} >Contact Us</Link>
            <a href='https://firebasestorage.googleapis.com/v0/b/qazi-mairaj-uddin-portfolio.appspot.com/o/QaziMairaj-Resume.pdf?alt=media&token=104d33b2-4633-4913-93bd-4996b8326e10' download target='blank_' className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivrlink('resume')} style={{ fontSize: '25px', fontWeight: 'bold',color:'white', textDecorationLine:'none',marginLeft:'40px' }} > <Download className='resumedownload  animate__animated animate__bounce' style={{fontSize:'50px',color:'White' }}><span>Resume</span></Download></a>
            {/* <a
          
              className="button "
              href='..\assets\Docspapers\QaziMairaj-Resume(1).pdf'
              download
             
            > */}
             {/* <Download style={{fontSize:'50px',color:'White', }}/><br/> */}
             <p style={{color:'White',textDecoration:'none',display:'inline-block'}} >Download <br/>Resume</p>
                          
            {/* </a> */}
            
            {/* <span style={{fontStyle:'none',color:'White',textDecoration:'none'}} >Download <br/>Resume</span> */}



        </Nav>
        

      </Navbar.Collapse>
    </Container>
    </Navbar >

  );
}
// import React from "react";
// import { saveAs } from "file-saver";

// export default function App() {
//   const saveFile = () => {
//     saveAs(
//       "URL_PATH",
//       "DOWNLOADED_FILE_NAME"
//     );
//   };
//   return (
//     <div>
//       <button onClick={saveFile}>download</button>
//     </div>
//   );
// }