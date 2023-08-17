import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Common = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className='nav-link' to="/list">List</Link>
                    <Link className='nav-link' to="/create">Create</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Common;