import React from 'react'
import { Link } from 'react-router-dom'
// import {Container, Col, Row} from 'react-bootstrap'
// import Logo from '../assets/img/Logo1.png'
// import NavIcon1 from '../assets/img/nav-icon1.svg'
// import NavIcon2 from '../assets/img/nav-icon2.svg'
// import NavIcon3 from '../assets/img/nav-icon3.svg'
import {   Twitter , Linkedin,Github } from 'react-bootstrap-icons'

export const Footer = () => {
  return (


    <>

    
			
		<footer className="footer-07">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12 text-center">
						<h2 className="footer-heading">Qazi Mairaj Uddin</h2>
						
						<span>
            <div className="social-icon" style={{fontSize:'40px'}}>
                <Link to="https://www.linkedin.com/in/qazi-mairaj-uddin-8214051b6/" target='-blank' rel="noopener noreferrer" ><Linkedin color='white'/></Link>
                <Link  to="https://twitter.com/QaziMairajUddin" target='-blank' rel="noopener noreferrer" > <Twitter color='white'/></Link>
                <Link  to="https://github.com/Mairajuddin" target='-blank' rel="noopener noreferrer" > <Github color='white'/></Link>
                </div>
            {/* <button className="vvd" onClick={()=>console.log('connect')}><span  style={{color:'#fff', marginLeft:'15px' , fontSize:'19px', fontFamily:'sans-serif'}}>let's Connect</span></button> */}
            
          </span>
					</div>
				</div>
				<div className="row mt-2">
					<div className="col-md-12 text-center">
						<p>Email: qazimairaj4@gmail.com<br />
							
						</p>

					</div>
				</div>
			</div>
		</footer>

        </>



//    <footer className='footer'>
//     <Container>
//         <Row className='align-items-center'>
//             <Col sm={6}>
//                 <img src={Logo} className='logoimg2'  />
//             </Col>
//             <Col sm={6} className='text-center text-sm-end'>
//                 <div className='social-icon'>
//                 <a href="https://www.linkedin.com/in/qazi-mairaj-uddin-8214051b6/" target='-blank'> <img src={NavIcon1} alt="LinkedIn" /></a>
//                 <a href="https://www.facebook.com/prince.mairaj.7524/" target='-blank'> <img src={NavIcon2} alt="Facebook" /></a>
//                 <a href="https://www.instagram.com/qazi.mairaj/" target='-blank'> <img src={NavIcon3} alt="Instagram" /></a>

//                 </div>
//                 <p className='mb-0'>
//                     Copyright 2023. All Right Reserved
//                 </p>
                
//             </Col>

//         </Row>
//     </Container>

//    </footer>
  )
}
