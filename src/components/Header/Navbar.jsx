import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavBar() {
    return (
    <>
        {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton >
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="
                            flex justify-around gap-3
                            md:gap-20">
                            <Nav.Link className='hover:text-yellow-500' href="#">Home</Nav.Link>
                            <Nav.Link className='hover:text-yellow-500' href="#">New</Nav.Link>
                            <Nav.Link className='hover:text-yellow-500' href="#">Popular</Nav.Link>
                            <Nav.Link className='hover:text-yellow-500' href="#">Trending</Nav.Link>
                            <Nav.Link className='hover:text-yellow-500' href="#">Categories</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        ))}
    </>
    );
}