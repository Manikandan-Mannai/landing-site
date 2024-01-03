import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Left>
          <FooterHeading>Contact Us</FooterHeading>
          <p>Plot no: 206 - Lake View Serenity</p>
          <p>Pudi (Opposite Sricity Entrance), Tada - 524401. Tirupathi District, Andhra Pradesh.</p>
          <p>Landmark: Sricity Zero Point</p>
          <p>Email: kalpana@kllifespace.com</p>
          <p>Phone: +91 7901333332</p>
        </Left>

        <Right>
          <FooterHeading>Follow Us</FooterHeading>
          <SocialIcons>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
        </Right>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2023 Tranquildove. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100vw;
  padding: 20px 104px;
  color: #fff;
  background-color: var(--primary-color);
  text-align: center;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Right = styled.div`
  margin-top: 20px; 
`;

const Left = styled.div`
  margin-bottom: 20px;
`;

const FooterHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px; /* Add some spacing between sections */
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;

const FooterBottom = styled.div`
  margin-top: 20px;
  text-align: center;
`;
