import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FloorImages } from './data';

const Floor = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <FloorSection id="floor" role="region" aria-label="Floor Section">
      <Left role="region" aria-label="Left Content">
        <Line />
        <h1>SRICITY</h1>
        <h1>Villa Floor Plan</h1>
        <p>
          Located in the tranquil and picturesque locale of Tada, our
          western-facing villas redefine the art of luxurious living. Each
          villa is a masterpiece of thoughtful design, meticulously crafted to
          offer you an exclusive range of 3BHK and 4BHK residences, set on
          expansive 30x50 plots. With Sricity on your doorstep, these villas are
          a testament to prosperity and a future where elegance seamlessly
          intertwines with comfort. Every villa is a sanctuary of space, adorned
          with top-notch amenities and opulent interiors, promising you the
          epitome of luxurious living.
        </p>
      </Left>
      <Right role="region" aria-label="Image Carousel">
        <Carousel {...settings}>
          {FloorImages.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={`Floor Image ${index}`}
                role="presentation"
              />
              <h3>{item.name}</h3>
            </div>
          ))}
        </Carousel>
      </Right>
    </FloorSection>
  );
};

export default Floor;

const FloorSection = styled.section`
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

const Left = styled.div`
  p {
    padding-right: 5%; /* Adjusted for smaller screens */
    text-align: justify;
  }
  @media only screen and (max-width: 768px) {
    p {
      padding-right: 0;
    }
  }
`;

const Right = styled.div``;

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
    flex: 0 0 auto;
    margin: 0 auto;
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

const Line = styled.div`
  width: 100px;
  height: 10px;
  background-color: var(--primary-color);
  margin-bottom: 10px;
`;
