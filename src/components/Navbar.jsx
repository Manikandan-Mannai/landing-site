import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from '../assets/test3.jpg'

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleMenuToggle = () => {
    setShowNavLinks(!showNavLinks);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setShowNavLinks(false);
    setIsMenuOpen(false);
  };

  return (
    <StyledContainer>
      <Overlay />
      <BackgroundImageContainer>
        <img src={BackgroundImage} alt="" srcset="" />
      </BackgroundImageContainer>
      <StyledNavbar>
        <div className="logo">Logo</div>
        <nav>
          <button
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={handleMenuToggle}
            aria-label="Toggle Navigation"
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          <ul className={`nav-links ${showNavLinks ? "show" : ""}`}>
            <li>
              <a href="#home" onClick={handleNavLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleNavLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#amenities" onClick={handleNavLinkClick}>
                Amenities
              </a>
            </li>
            <li>
              <a href="#streetview" onClick={handleNavLinkClick}>
                Street View
              </a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
        <button
          className="contact-btn"
        >Contact
        </button>
      </StyledNavbar>
      <HeroSection>
        <div>
          <h1>
            WHERE SERENE LIVING
          </h1>
          <h1>
            TAKES FLIGHT
          </h1>
        </div>
        <div>
          <button>More about Us</button>
        </div>
      </HeroSection>
    </StyledContainer>
  );
};

export default Navbar;

const StyledContainer = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
    `;

const BackgroundImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    `;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 70%);
`;


const StyledNavbar = styled.nav`
  position: sticky;
  /* top: 0;
  left: 0; */
  width: 80%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
    background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(30px);
          backdrop-filter: blur(30px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  border: 1px solid #fff;
  border-radius: 16px;
  margin: 20px auto;
  box-sizing: border-box; 
    .nav-links {
      list-style: none;
      display: flex;
      gap: 20px;

      @media only screen and (max-width: 768px) {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background-color: var(--secondary-color);
        padding: 10px;
        text-align: center;
        z-index: 10;
      }

      &.show {
        display: flex;
      }

      li {
        margin: 10px 0;
      }
      li > a:hover {
        color: var(--accent-color);
      }
      a {
        text-decoration: none;
        color: var(--primary-color);
        font-weight: bold;
        transition: color 0.3s ease-in-out;
      }
    }

    .contact-btn {
      background-color: var(--primary-color);
      color: var(--secondary-color);
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    .menu-toggle {
      display: none;
      cursor: pointer;
      margin-left: auto;
      padding: 10px;

      @media only screen and (max-width: 768px) {
        display: block;
      }
    }

    .bar {
      width: 25px;
      height: 3px;
      background-color: var(--primary-color);
      margin: 5px 0;
      transition: 0.4s;
    }

    .menu-toggle.open .bar:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    .menu-toggle.open .bar:nth-child(2) {
      opacity: 0;
    }

    .menu-toggle.open .bar:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `;

const HeroSection = styled.div`
    position: absolute;
    bottom: 0;
    left: 30%;
    transform: translate(-50%, -50%);
    text-align: left;
    color: white;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  `;

