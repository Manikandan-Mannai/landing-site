import React, { useEffect } from 'react';
import styled from 'styled-components';
import ISRO from '../assets/ISRO.png';
import Community from '../assets/community.png';
import Income from '../assets/income.png';
import Entrance from '../assets/entrance.png';
import Companies from '../assets/companies.png';
import School from '../assets/school.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TimeLine = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <ParentContainer>
      <h1>What makes us Different ?</h1>
      <Container>
        <Box data-aos="fade-right">
          <Left>
            <ImageContainer>
              <Image src={ISRO} alt="Property in Tada with a view of ISRO Space Station Launch Pad." />
            </ImageContainer>
          </Left>
          <Divider />
          <Right>
            <TextContainerRight>
              <h2>Unique Location</h2>
              <Line />
              <p>Property in Tada with a view of ISRO Space Station Launch Pad.</p>
            </TextContainerRight>
          </Right>
        </Box>
        <Box data-aos="fade-left">
          <TextContainerLeft>
            <Left>
              <h2>Largest Gated Community</h2>
              <Line />
              <p>Spanning 21 acres, the largest in SriCity Tada.</p>
            </Left>
          </TextContainerLeft>
          <Divider />
          <Right>
            <ImageContainer>
              <Image src={Community} alt="Spanning 21 acres, the largest in SriCity Tada." />
            </ImageContainer>
          </Right>
        </Box>
        <Box data-aos="fade-right">
          <Left>
            <ImageContainer>
              <Image src={Income} alt="Opportunity for rental property income." />
            </ImageContainer>
          </Left>
          <Divider />
          <Right>
            <TextContainerRight>
              <h2>Rental Income</h2>
              <Line />
              <p>Opportunity for rental property income.</p>
            </TextContainerRight>
          </Right>
        </Box>
        <Box data-aos="fade-left">
          <TextContainerLeft>
            <Left>
              <h2>Strategic Location</h2>
              <Line />
              <p>Opposite SriCity entrance, providing easy access.</p>
            </Left>
          </TextContainerLeft>
          <Divider />
          <Right>
            <ImageContainer>
              <Image src={Entrance} alt="Opposite SriCity entrance, providing easy access." />
            </ImageContainer>
          </Right>
        </Box>
        <Box data-aos="fade-right">
          <Left>
            <ImageContainer>
              <Image src={Companies} alt="150+ companies within 5 minutes." />
            </ImageContainer>
          </Left>
          <Divider />
          <Right>
            <TextContainerRight>
              <h2>Proximity to Industries</h2>
              <Line />
              <p>150+ companies within 5 minutes.</p>
            </TextContainerRight>
          </Right>
        </Box>
        <Box data-aos="fade-left">
          <TextContainerLeft>
            <Left>
              <h2>Education Hub</h2>
              <Line />
              <p>Access to the best schools and institutions.</p>
            </Left>
          </TextContainerLeft>
          <Divider />
          <Right>
            <ImageContainer>
              <Image src={School} alt="Access to the best schools and institutions." />
            </ImageContainer>
          </Right>
        </Box>
      </Container>
    </ParentContainer>
  );
};

export default TimeLine;

const ParentContainer = styled.div`
  background-color: var(--primary-color);
  h1{
    text-align: center;
    color: var(--secondary-color);
    padding: 25px 0px;
  }
    @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    h2{
      font-size: 36px !important;
    }
  }
`;

const Container = styled.div`
  width: 82vw;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--primary-color);
  h2{
    font-size: 46px;
  }

`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  margin: 20px 0;

`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: #fff;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  color: var(--secondary-color);

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  color: var(--secondary-color);
        @media only screen and (max-width: 768px) {
    flex:0 ;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 300px;
      @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

const Line = styled.div`
  width: 80px;
  height: 5px;
  background-color: var(--text-color);
  margin: 15px 5px;
`;


const TextContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  h2,
  p {
    align-self: flex-start;
    text-align: left;
    margin: 0 5px;
  }
`;
const TextContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  h2,
  p {
    align-self: flex-end;
    text-align: right;
    margin: 0 5px;
  }
`;

