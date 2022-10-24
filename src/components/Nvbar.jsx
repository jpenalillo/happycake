import { Link } from "react-router-dom";
//import { Navbar, Container } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
            <div>
            <Navbar bg="danger" variant="dark">
                <Container className="justify-content-start">
                    <Navbar.Brand>Happy Cake 🧁</Navbar.Brand>
                    
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                    Home
                    </Link>

                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                    Contacto
                    </Link>
                </Container>
            </Navbar>
            </div>
    );
}
export default  Navigation