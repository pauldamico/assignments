import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavPage() {
const {logout, token} = useContext(UserContext)
console.log(token)
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Rock The Vote</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/public"}>
                Public            
              </Nav.Link>
             {!token ? <Nav.Link as={Link} to={"/auth"}>
                Login            
              </Nav.Link> :
              token &&<Nav.Link onClick ={logout }>
                Logout            
              </Nav.Link>}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
