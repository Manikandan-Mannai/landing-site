import React, { useEffect } from 'react';
import styled from 'styled-components';
import AboutImage from '../assets/test.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Container id="about" role="region" aria-label="About Section">
      <Left>
        <Box data-aos="fade-right">
          <p>Your Space</p>
          <p>Your Story</p>
          <p>Our Expertise</p>
        </Box>
        <ImageContainer>
          <img src={AboutImage} alt="About" />
        </ImageContainer>
      </Left>
      <Right data-aos="fade-left" role="group" aria-label="About Content">
        <Line role="separator" />
        <div>
          <h1>About</h1>
          <h1>The Group</h1>
        </div>
        <div>
          <p>
            Experience elevated living with <span>K&L Life Spaces</span>, a subsidiary of <span>Nakshatra Builders</span> and{' '}
            <span>HavinHomes Realty</span>. We specialize in crafting modern luxury living spaces, transforming blueprints into
            realities that resonate with sophistication. Join us in creating a future where every structure is infused with
            passion, and every space reflects our commitment to crafting exceptional lifestyles.
          </p>
        </div>
      </Right>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100vw;
  max-height: 100vh;
  padding: 20px 104px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    margin: auto;
  }
`;

const Left = styled.div`
  position: relative;
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

const Right = styled.div`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  text-align: left;

  p {
    text-align: justify;
  }

  @media only screen and (max-width: 768px) {
    align-items: end;
    text-align: right;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 280px;
  }
`;

const Box = styled.div`
  position: absolute;
  top: -10%;
  left: 10%;
  color: var(--text-color);
  background-color: #fff;
  width: 200px;
  height: 280px;
  border-radius: 16px;
  box-shadow: 16px 9px 44px -14px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    left: 30%;
    transform: translateX(-50%);
    top: -20%;
    width: 180px;
    height: 180px;
  }
`;

const Line = styled.div`
  width: 100px;
  height: 10px;
  background-color: var(--primary-color);

`;
