import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo1 from '../assets/logos/logo1.png'; // Replace with your actual logo imports
import Logo2 from '../assets/logos/logo2.png';
import Logo3 from '../assets/logos/logo3.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoColumn>
          <LogoHeading>Our Associated Ventures</LogoHeading>
          <AssociatedLogos>
            <LogoImgContainer>
              <AssociatedLogo src={Logo1} alt="Logo 1" />
            </LogoImgContainer>
            <LogoImgContainer>
              <AssociatedLogo src={Logo2} alt="Logo 2" />
            </LogoImgContainer>
            <LogoImgContainer>
              <AssociatedLogo src={Logo3} alt="Logo 3" />
            </LogoImgContainer>

          </AssociatedLogos>
        </LogoColumn>

        <ContactColumn>
          <FooterHeading>Contact Us</FooterHeading>
          <ContactInfo>
            <p>Plot no: 206 - Lake View Serenity</p>
            <p>Pudi (Opposite Sricity Entrance), Tada - 524401. Tirupathi District, Andhra Pradesh.</p>
            <p>Landmark: Sricity Zero Point</p><br />
            <p>Email: kalpana@kllifespace.com</p>
            <p>Phone: +91 7901333332</p>
          </ContactInfo>
        </ContactColumn>

        <SocialColumn>
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
        </SocialColumn>
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
  padding: 20px;
  color: #fff;
  background-color: var(--primary-color);
  text-align: center;
    @media only screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction  :column ;
  }
`;

const Column = styled.div`
  flex: 1;
  max-width: 400px;
  margin: 20px;
`;

const LogoColumn = styled(Column)``;

const ContactColumn = styled(Column)``;

const SocialColumn = styled(Column)``;

const FooterHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const AssociatedLogos = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const LogoImgContainer = styled.div`
width: 150px;
height: 100px;
@media only screen and (max-width: 768px) {
      width: 100px;
      height: 50px;
  }
`

const AssociatedLogo = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`;

const LogoHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
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
