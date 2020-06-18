import React, { Component } from "react";
import {
  Image,
  Container,
  Nav,
  NavDropdown,
  Button,
  Navbar,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: sessionStorage.getItem("role"),
      username: sessionStorage.getItem("username"),
      redirect: false,
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
    if (this.state.role === "1" || this.state.role === "2") {
      return (
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container className="nav-container">
            <Link to="/">
              <Navbar.Brand>
                <Image
                  src={require("../images/twitterlogo.png")}
                  roundedCircle
                  className="nav-logo-image"
                />
              </Navbar.Brand>
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
              <DropdownButton
                id="dropdown-basic-button"
                variant="secondary"
                title={this.state.username + " "}
                className="px-1"
              >
                <Dropdown.Item>
                  <Link
                    to="/session"
                    className="text-dark"
                    style={{ textDecoration: "none", color: "#343a40" }}
                  >
                    Sessions
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/myposts"
                    className="text-dark"
                    style={{ textDecoration: "none", color: "#343a40" }}
                  >
                    My Posts
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Button
                  onClick={() => {
                    this.setState({ redirect: true });
                    sessionStorage.clear();
                  }}
                  variant="danger"
                  className="mx-3 text-center"
                >
                  Log Out
                </Button>
              </DropdownButton>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else if (this.state.role === "3") {
      return (
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container className="nav-container">
            <Link to="/">
              <Navbar.Brand>
                <Image
                  src={require("../images/twitterlogo.png")}
                  roundedCircle
                  className="nav-logo-image"
                />
              </Navbar.Brand>
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

              <DropdownButton
                id="dropdown-basic-button"
                variant="secondary"
                title={this.state.username + " "}
                className="px-1"
              >
                <Dropdown.Item>
                  <Link
                    to="/admin"
                    className="text-success"
                    style={{ textDecoration: "none", color: "#343a40" }}
                  >
                    Admin Page
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link
                    to="/session"
                    className="text-dark"
                    style={{ textDecoration: "none", color: "#343a40" }}
                  >
                    Sessions
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/myposts"
                    className="text-dark"
                    style={{ textDecoration: "none", color: "#343a40" }}
                  >
                    My Posts
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Button
                  onClick={() => {
                    this.setState({ redirect: true });
                    sessionStorage.clear();
                  }}
                  variant="danger"
                  className="mx-3 text-center"
                >
                  Log Out
                </Button>
              </DropdownButton>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container className="nav-container">
            <Link to="/">
              <Navbar.Brand>
                <Image
                  src={require("../images/twitterlogo.png")}
                  roundedCircle
                  className="nav-logo-image"
                />
              </Navbar.Brand>
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
