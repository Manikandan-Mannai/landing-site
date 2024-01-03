import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { StreetViewData } from './data';

const StreetView = () => {
    return (
        <Container>
            <Left>
                <h2>INDULGE</h2>
                <h2>IN LUXURY, EMBRACE SERENITY</h2>
            </Left>
            <Right>
                <StyledCarousel autoPlay>
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
  min-height: 80vh;
  padding: 20px 104px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  position: relative;
`;

const Left = styled.div`
  position: relative;
  top: 0%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
`;



const StyledCarousel = styled(Carousel)`
  .carousel {
    position: relative;
  }
`;


const CarouselImage = styled.img`
  width: 100%;
  height: 300px; 
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



export default StreetView;
