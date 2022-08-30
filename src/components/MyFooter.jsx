import { Navbar,Nav,Container } from "react-bootstrap";

const MyFooter = () => (
    <Navbar bg="primary " variant="dark">
    <Container fluid>
      <Nav className="mr-auto justify-content-between">
        <Nav.Link href="#home" className="text-center">Contact Us</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyFooter;
