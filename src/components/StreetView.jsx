import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { StreetViewData } from './data';

const StreetView = () => {
  return (
    <Container id='streetview'>
      <Left>
      <Line/>
        <h1>Street View</h1>
        <p>INDULGE</p>
        <p>IN LUXURY, EMBRACE SERENITY</p>
      </Left>
      <Right>
        <StyledCarousel autoPlay infiniteLoop>
          {StreetViewData.map((item) => (
            <CarouselItem key={item.id}>
              <CarouselImage src={item.image} alt={item.name} />
              <p className="legend">{item.name}</p>
            </CarouselItem>
          ))}
        </StyledCarousel>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  max-height: 100vh;
  padding: 20px 104px;
  display: flex;
  align-items: center;
  justify-content: center;

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

