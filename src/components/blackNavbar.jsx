import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { useAuth } from "../AuthContext";

function BlackNavbar() {
  let auth = useAuth();
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container className="customNavbar">
        <Navbar.Brand href="/" style={{ margin: "0" }}>
          e-selection
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets" style={{ paddingRight: "5%" }}>
              Deets
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ paddingRight: "5%" }}>
              Pricing
            </Nav.Link>
            <Nav.Link href="#features" style={{ paddingRight: "5%" }}>
              Features
            </Nav.Link>
            <NavDropdown title="My account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="./login">Login</NavDropdown.Item>
              <NavDropdown.Item href="./signup">Sign up</NavDropdown.Item>
              <NavDropdown.Item href="./dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.4"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BlackNavbar;
