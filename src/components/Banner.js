import React from 'react'
import { useState, useEffect } from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'
// import headerImg from '../assets/img/header-img2.png'
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate=['Beginner React Js Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const  period=2000;
    useEffect(()=>{
        let  ticker= setInterval(()=>{
            tick();
        },delta)
        return()=>{
            clearInterval(ticker);
        }
    },[text])

    const tick=()=>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
          }
      
          if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            // setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
          } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            // setIndex(1);
            setDelta(500);
          } 
        }
      
         
    
    
    return (
        <section className='banner' id='home'>
            <Container style={{marginTop:'50px'}}>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1 style={{fontSize:'50px'}}>{`Hi This is Qazi Mairaj `}<span className='wrap'>{text}</span></h1>
                        <p style={{textAlign:'justify', textJustify:'inter-word',maxWidth:'50em'}}>I am a student at Sir Syed University of Engineering and Technology, majoring in Software Engineering. Recently, I have started working with React JS and have gained proficiency in it. You can check my portfolio to see my work, which is all coded on React JS. I am passionate about software development and excited to continue exploring and expanding my skills in this field.</p>
                        <button onClick={() => console.log('connect')}> let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={7} >
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
