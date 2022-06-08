import { Navbar, Container, NavDropdown, Nav, collapseOnSelect, expand,bg , variant} from 'react-bootstrap';

function BootstrapNavbar(){
return (
<Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "#1876D1"}}>
  <Container className="customNavbar">
  <Navbar.Brand href="#home" style={{margin: "0"}}>e-selection</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#deets" style={{paddingRight: "5%"}}>Deets</Nav.Link>
      <Nav.Link href="#pricing" style={{paddingRight: "5%"}}>Pricing</Nav.Link>
      <Nav.Link href="#features" style={{paddingRight: "5%"}}>Features</Nav.Link>
      <NavDropdown title="My account" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default BootstrapNavbar;