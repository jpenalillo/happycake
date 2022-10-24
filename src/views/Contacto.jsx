import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function Contacto (){
  const navigate = useNavigate();
    return(
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" placeholder="Agrega tu nombre" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger" type="submit" onClick={()=>{
          navigate('/exito')
        }}>
          Submit
        </Button>
      </Form>
    )
}
export default Contacto