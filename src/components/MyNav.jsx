import { Navbar,Nav,Container } from "react-bootstrap";


const MyNav = () => (
    <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">StriveBooks</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
)

export default MyNav;