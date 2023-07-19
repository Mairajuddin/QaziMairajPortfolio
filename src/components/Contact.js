import React,{useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

const Contact = () => {
    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        messsage:''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('send');
    const [status, setStatus] = useState({})

    const onFormUpdate=(category,value)=>{
        setFormDetails({
            ...formDetails,
            [category]:value
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
      };
  return (
    <section className='contact' id='contact'>
        <Container style={{paddingTop:'150px'}}>
            <Row className='align-items-center'>
                <Col md={6}>
                <img src={contactImg} alt="contact-us"  style={{height:'600px',width:'600px',animation: 'updown 3s linear infinite'}}/>
                </Col>
                <Col md={6}>
                    <h2>Get in Touch</h2>
                    <form  onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type="text" value={formDetails.firstName} placeholder='enter first name' onChange={(e)=>onFormUpdate('firstName', e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type="text" value={formDetails.lastName} placeholder='enter last name' onChange={(e)=>onFormUpdate('lastName', e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type="email" value={formDetails.email} placeholder='enter email address' onChange={(e)=>onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type="tel" value={formDetails.phone} placeholder='enter Phone number' onChange={(e)=>onFormUpdate('phone', e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <textarea rows={6} value={formDetails.messsage} placeholder='message' onChange={(e)=>onFormUpdate('message', e.target.value)}>{}</textarea>
                            <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.messsage &&
                                <Col>
                                <p className={status.success===false?'danger':'success'}>{status.messsage}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Contact