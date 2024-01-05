import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { StreetViewData } from './data';
import FeatherTexture from '../assets/feather.jpg'


const StreetView = () => {
  return (
    <Container id='streetview' role="region" aria-label="Street View Section">
      <Left>
        <Line role="separator" />
        <h1>Street View</h1>
        <p>INDULGE</p>
        <p>IN LUXURY, EMBRACE SERENITY</p>
      </Left>
      <Right aria-live="polite" aria-atomic="true">
        <StyledCarousel autoPlay infiniteLoop aria-roledescription="image carousel">
          {StreetViewData.map((item) => (
            <CarouselItem key={item.id} role="group" aria-label={item.name}>
              <CarouselImage src={item.image} alt={item.name} />
              <p className="legend" role="status">{item.name}</p>
            </CarouselItem>
          ))}
        </StyledCarousel>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  max-height: 100vh;
  padding: 20px 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${FeatherTexture});
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white; 
    opacity: 0.7; 
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
  }
`;



const Right = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;

  @media only screen and (max-width: 768px) {
    flex: 0;
    align-items: center;
    text-align: center;
  }
`;

const Left = styled.div`
  position: relative;
  top: 0%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;

  @media only screen and (max-width: 768px) {
    flex: 0;
    align-items: center;
    text-align: center;
  }
`;

const StyledCarousel = styled(Carousel)`
  .carousel {
    position: relative;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;

const CarouselItem = styled.div`
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const Line = styled.div`
  width: 100px;
  height: 10px;
  background-color: var(--primary-color);
  margin-bottom: 10px;
`;

export default StreetView;
