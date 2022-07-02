import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { useAuth } from "../AuthContext";

function BootstrapNavbar() {
  let auth = useAuth();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#1876D1" }}
    >
      <Container className="customNavbar">
        <Navbar.Brand style={{ margin: "0" }}>e-selection</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#Services" style={{ paddingRight: "5%" }}>
              Services
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
                onClick={() => auth.signOut()}
              >
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootstrapNavbar;
