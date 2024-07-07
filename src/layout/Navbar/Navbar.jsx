import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../logo.png";
import "../../assets/scss/theme.scss";
import "../../assets/css/theme.css";

function CustomNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const headerAnimation = () => {
      const header = headerRef.current;
      const scrollTop = window.scrollY;

      if (header) {
        if (scrollTop > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", headerAnimation);

    return () => {
      window.removeEventListener("scroll", headerAnimation);
    };
  }, []);

  const handleYearSelect = (year) => {
    navigate(`/PastEvents/${year}`);
  };

  return (
    <header
      id="header"
      className={`header fixed-top ${isScrolled ? 'bg-gray' : ''}`}
      ref={headerRef}
    >
      <div className="branding">
          <Navbar expand="lg" className="px-3">
            <Navbar.Brand as={Link} to="/">
              <img className="logo-icon" src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/*<Nav.Link className="nav-item" as={Link} to="/">
                  Schedule
                </Nav.Link>*/}
                <NavDropdown title="Past Events" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => handleYearSelect(2023)}>
                    PIW 2023
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleYearSelect(2022)}>
                    PIW 2022
                  </NavDropdown.Item>
                </NavDropdown>
                {/*<Nav.Link as={Link} to="/about" className="nav-item disabled">
                  About
                </Nav.Link>*/}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    </header>
  );
}

export default CustomNavbar;
