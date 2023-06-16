
import { Container, Form, Button } from 'react-bootstrap';


const ContactForm = () => {
  

  return (
    <Container>
    <h2 className='heading-ration1'>Get in touch with us</h2>
    <Form action="mailto:kartickeshav@gmail.com" method="post" enctype="text/plain" className='auth heading-ration'>
      <Form.Group controlId="formBasicName" className='m-4'>
        
        <Form.Control type="text" placeholder="Enter name"  />
      </Form.Group>

      <Form.Group controlId="formBasicEmail" className='m-4'>
        
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicMessage" className='m-4'>
       
        <Form.Control as="textarea" rows={3} placeholder="Enter message" />
      </Form.Group>
      <Button  className="text-dark " type="submit">
        Submit
      </Button>
    </Form>
  </Container>
)
};

export default ContactForm;