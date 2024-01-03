import React from 'react';
import styled from 'styled-components';
import ISRO from '../assets/ISRO.png'
import Community from '../assets/community.png'
import Income from '../assets/income.png'
import Entrance from '../assets/entrance.png'
import Companies from '../assets/companies.png'
import School from '../assets/school.png'


const TimeLine = () => {
  return (
    <Container>
      <Box>
        <Left>
          <ImageContainer>
            <Image src={ISRO} alt="Property in Tada with a view of ISRO Space Station Launch Pad." />
          </ImageContainer>
        </Left>
        <Divider />
        <Right>
          <TextContainerRight>
            <h1>Unique Location</h1>
            <Line />
            <h3>Property in Tada with a view of ISRO Space Station Launch Pad.</h3>
          </TextContainerRight>
        </Right>
      </Box>
      <Box>
        <TextContainerLeft>
          <Left>
            <h1>Largest Gated Community</h1>
            <Line />
            <h3>Spanning 21 acres, the largest in SriCity Tada.</h3>
          </Left>
        </TextContainerLeft>
        <Divider />
        <Right>
          <ImageContainer>
            <Image src={Community} alt="Spanning 21 acres, the largest in SriCity Tada." />
          </ImageContainer>
        </Right>
      </Box>
      <Box>
        <Left>
          <ImageContainer>
            <Image src={Income} alt="Opportunity for rental property income." />
          </ImageContainer>
        </Left>
        <Divider />
        <Right>
          <TextContainerRight>
            <h1>Rental Income</h1>
            <Line />
            <h3>Opportunity for rental property income.</h3>
          </TextContainerRight>
        </Right>
      </Box>
      <Box>
        <TextContainerLeft>
          <Left>
            <h1>Strategic Location</h1>
            <Line />
            <h3>Opposite SriCity entrance, providing easy access.</h3>
          </Left>
        </TextContainerLeft>
        <Divider />
        <Right>
          <ImageContainer>
            <Image src={Entrance} alt="Opposite SriCity entrance, providing easy access." />
          </ImageContainer>
        </Right>
      </Box>
      <Box>
        <Left>
          <ImageContainer>
            <Image src={Companies} alt="150+ companies within 5 minutes." />
          </ImageContainer>
        </Left>
        <Divider />
        <Right>
          <TextContainerRight>
            <h1>Proximity to Industries</h1>
            <Line />
            <h3>150+ companies within 5 minutes.</h3>
          </TextContainerRight>
        </Right>
      </Box>
      <Box>
        <TextContainerLeft>
          <Left>
            <h1>Education Hub</h1>
            <Line />
            <h3>Access to the best schools and institutions.</h3>
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
  );
};

export default TimeLine;


const Container = styled.div`
  width: 100vw;
  padding: 20px 104px;
  background-color: var(--primary-color);

  h1{
    font-size: 48px;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
`;

const Divider = styled.div`
  position: absolute;
  height: 100%;
  width: 1px;
  background-color: #fff;
`

const Right = styled.div`
  flex: 1;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--secondary-color);
  margin: 0px;
  
  `;

const Left = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--secondary-color);
  `;

const ImageContainer = styled.div`
  width: 100%;
  height: 600px;
  max-width: 600px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  `

const Line = styled.div`
width: 100px;
height: 10px;
background-color: var(--text-color);
margin-bottom: 30px;

`

const TextContainerLeft = styled.div`
display: flex;
flex-direction: column;
align-items: start;
h1,h3{
  align-self: flex-start;
  text-align: left;
  margin: 0;
}
`

const TextContainerRight = styled.div`
display: flex;
flex-direction: column;
align-items: end;
h1,h3{
  align-self: flex-end;
  text-align: right;
  margin: 0;
}
`