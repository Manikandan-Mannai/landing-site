import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { cardData } from './data';
import 'aos/dist/aos.css';

const Container = styled.div`
  width: 100vw;
  max-height: 100vh;
  padding: 40px 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E9E9E9;
  @media only screen and (max-width: 768px) {
    padding: 0 0 25px 0;
  }
`;

const Carousel = styled(Slider)`
  width: 100%;
  max-width: 400px;
  height: auto;
  border: 2px solid var(--primary-color);
  border-radius: 10px;

  .slick-track {
    display: flex;
  }

  .slick-slide {
    outline: none;
    border: none;
    text-align: center;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .slick-prev,
  .slick-next {
    background-color: var(--primary-color);
    border-radius: 100%;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 25px;
    max-width: 300px;
  }
`;


const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  padding: 20px;
  font-size: 1rem;
  color: #555;
`;

const Card = styled.div`
`;

function CardCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Container>
                <Carousel {...settings}>
                    {cardData.map((card) => (
                        <Card key={card.id}>
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription>{card.description}</CardDescription>
                        </Card>
                    ))}
                </Carousel>
        </Container>
    );
}

export default CardCarousel;
