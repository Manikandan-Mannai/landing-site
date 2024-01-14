import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BackgroundImage from '../assets/test3.jpg';
import Logo from '../assets/logo.png';
import ContactInfo from "./ContactForm";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleMenuToggle = () => {
    setShowNavLinks(!showNavLinks);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setShowNavLinks(false);
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <StyledContainer id="home">
      <Overlay />
      <BackgroundImageContainer>
        <img src={BackgroundImage} alt="" />
      </BackgroundImageContainer>
      <StyledNavbar>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
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
          </ul>
        </nav>
        <button className="contact-btn" onClick={handleContactClick}>
          Contact
        </button>
      </StyledNavbar>
      {isContactOpen && <ContactInfo onClose={handleCloseContact} />}
      <HeroSection>
        <TextContainer data-aos="fade-right">
          <div>
            <p>WELCOME TO</p>
            <p>TRANQUIL DOVE</p>
            <p>VILLAS, YOU</p>
          </div>
          <h1>GATEWAY</h1>
          <div>
            <p>TO</p>
            <p>LAKESIDE</p>
            <p>LUXURY</p>
          </div>
        </TextContainer>
        <div id="container">
          <DownloadBtn className="download">
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Brochure</span>
          </DownloadBtn>
        </div>
      </HeroSection>
    </StyledContainer>
  );
};

export default Navbar;

// Styled components...


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
  width: 83%;
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
  border-radius: 16px;
  margin: 20px auto;
  box-sizing: border-box;

  .logo {
    width: 40px;
  }

  img {
    width: 100%;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;

    @media only screen and (max-width: 768px) {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 112px;
      left: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.2);
      -webkit-backdrop-filter: blur(30px);
      backdrop-filter: blur(30px);
      border-radius: 16px;
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
    padding: 5px;

    @media only screen and (max-width: 768px) {
      display: block;
    background: transparent;
    border: none;
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
  top: 70%;
  left: 20%;
  transform: translate(-25%, -50%);
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

  @media only screen and (max-width: 768px) {
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

const DownloadBtn = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  margin-left: 5%;
  width: 12rem;
  height: auto;
  

  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: var(--primary-color);
    border-radius: 1.625rem;

    .icon {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      background: #fff;
    }

    .icon.arrow {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      left: 0.625rem;
      width: 1.125rem;
      height: 0.125rem;
      background: none;

      &::before {
        position: absolute;
        content: "";
        top: -0.25rem;
        right: 0.0625rem;
        width: 0.625rem;
        height: 0.625rem;
        border-top: 0.125rem solid #fff;
        border-right: 0.125rem solid #fff;
        transform: rotate(45deg);
      }
    }
  }

  .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: WHITE;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  &:hover .circle {
    width: 100%;
  }

  &:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  &:hover .button-text {
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5%;
  width: 70vw;
  p {
    font-size: 16px;
    margin: 0;
  }

  h1 {
    font-size: 102px;
    font-weight: 100;
  }

  @media only screen and (max-width: 768px) {
    width: 80vw;
    margin-left: 0;
    h1 {
      margin: auto;
      font-size: 42px !important;
    }

    p {
      margin: auto;
      font-size: 8px;
    }
  }
`;