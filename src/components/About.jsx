import React from 'react';
import styled from 'styled-components';
import AboutImage from '../assets/test.jpg';

const About = () => {
    return (
        <Container>
            <Left>
                <Box>
                    <p>Your Space</p>
                    <p>Your Story</p>
                    <p>Our Expertise</p>
                </Box>
                <ImageContainer>
                    <img src={AboutImage} alt="About" />
                </ImageContainer>
            </Left>
            <Right>
                <Line />
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
  min-height: 100vh;
  padding: 20px 104px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around ;
  align-items: start;

  p{
    text-align: justify;
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
`;

const Line = styled.div`
width: 100px;
height: 10px;
background-color: var(--primary-color);
margin-bottom: 10px;

`