import React, { Component } from "react";
import {
  Image,
  Container,
  Nav,
  NavDropdown,
  Button,
  Navbar,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: sessionStorage.getItem('role'),
      redirect: false
    };
  }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      this.setState({ redirect: false });
      if (window.location.pathname === "/") {
        window.location.reload();
      } else {
        return <Redirect to="/" />;
      }
    }
    console.log(`eimai to role sto navbar${this.state.role}`);
    if (this.state.role === "1" || this.state.role === "2") {
      return (
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container>
            <Link to="/">
              <Navbar.Brand>Logo</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/posts" className="text-light nav-link mx-1">
                  Posts
                </NavLink>
                <NavLink to="/faq" className="text-light nav-link mx-1">
                  FAAAAAAAAAAAAAAAAAAQ
                </NavLink>
                <NavDropdown
                  title={
                    <span className="text-light my-auto">Useful Links</span>
                  }
                  id="basic-nav-dropdown"
                  className="mx-1"
                >
                  <NavDropdown.Item>
                    <NavLink
                      to="/useful-links"
                      style={{ textDecoration: "none", color: "#343a40" }}
                    >
                      All Info
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <NavLink
                      to="/useful-links#sites"
                      style={{
                        textDecoration: "none",
                        color: "#343a40",
                      }}
                    >
                      Websites
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/useful-links#numbers"
                      style={{ textDecoration: "none", color: "#343a40" }}
                    >
                      Telephone Numbers
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <NavLink to="/session" className="text-light nav-link mx-1">
                  Session
              </NavLink>
              <Button
                onClick={() => {
                  this.setState({ redirect: true });
                  sessionStorage.clear();
                }}
                variant="danger"
                className="ml-1"
              >
                Log Out
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container>
            <Link to="/">
              <Navbar.Brand>Logo</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/posts" className="text-light nav-link mx-1">
                  Posts
                </NavLink>
                <NavLink to="/faq" className="text-light nav-link mx-1">
                  FAQ
                </NavLink>
                <NavDropdown
                  title={
                    <span className="text-light my-auto">Useful Links</span>
                  }
                  id="basic-nav-dropdown"
                  className="mx-1"
                >
                  <NavDropdown.Item>
                    <NavLink
                      to="/useful-links"
                      style={{ textDecoration: "none", color: "#343a40" }}
                    >
                      All Info
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <NavLink
                      to="/useful-links#sites"
                      style={{
                        textDecoration: "none",
                        color: "#343a40",
                      }}
                    >
                      Websites
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/useful-links#numbers"
                      style={{ textDecoration: "none", color: "#343a40" }}
                    >
                      Telephone Numbers
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Link to="/login">
                <Button variant="primary" className="mx-1">
                  Login
                </Button>
              </Link>
              <Link to="/join">
                <Button variant="warning" className="ml-1">
                  Sign Up
                </Button>
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  }
}

export default NavBar;
