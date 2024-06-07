import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../logo.png";
import "../../assets/scss/theme.scss";
import "../../assets/css/theme.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pastEventClicked, setPastEventClicked] = useState(false); // State to track if past event button was clicked
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the page is scrolled
  const headerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const headerAnimation = () => {
      const header = headerRef.current;
      const scrollTop = window.scrollY;

      if (header) {
        if (scrollTop > 100) {
          setIsScrolled(true); // Set isScrolled to true when scrolling past 100px
        } else {
          setIsScrolled(false); // Set isScrolled to false when scrolling back to top
        }
      }
    };

    window.addEventListener("scroll", headerAnimation);

    return () => {
      window.removeEventListener("scroll", headerAnimation);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleYearSelect = (year) => {
    setDropdownOpen(false); // Close dropdown after selection
    setPastEventClicked(true); // Set state to true when past event button is clicked
    navigate(`/PastEvents/${year}`); // Navigate to the year-specific page
  };

  return (
    <header
      id="header"
      className={`header fixed-top ${isScrolled ? 'bg-gray' : ''}`}
      ref={headerRef}
    > {/* Here, the bg-gray class is conditionally applied based on the isScrolled state */}
      <div className="branding">
        <div className="container-fluid">
          <nav className="main-nav navbar navbar-expand-lg">
            <div className="site-logo">
              <Link to="/">
                <img className="logo-icon" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="navbar-btn order-lg-2 ms-2">
              <Link to="/" className="btn btn-secondary">
                Home
              </Link>
            </div>

            <div className="navbar-btn order-lg-2 ms-2">
              <Link to="/" className="btn btn-secondary">
                About Us
              </Link>
            </div>

            <div className="site-logo">
              <Link to="/">
                <img className="logo-icon" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="navbar-btn order-lg-2 ms-2">
              <Link to="/" className="btn btn-secondary">
                Schedule
              </Link>
            </div>
            <div className="site-logo">
              <Link to="/">
                <img className="logo-icon" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="navbar-btn order-lg-2 ms-2">
              <Link to="/" className="btn btn-secondary">
                Speakers
              </Link>
            </div>

            <div className="navbar-btn order-lg-2 ms-2">
              <div className="btn-group">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen}
                >
                  Past Events
                </button>
                <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} style={{ top: '55px' }}>
                  <li>
                    <button className="dropdown-item" onClick={() => handleYearSelect(2023)}>PIW 2023</button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleYearSelect(2022)}>PIW 2022</button>
                  </li>
                </ul>
              </div>
            </div>
            {pastEventClicked ? null : (
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            )}
            <div
              id="navigation"
              className="navbar-collapse collapse justify-content-lg-end me-lg-3"
            >
             
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
