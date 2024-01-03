import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Aminites } from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Amenities = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <>
      <Container id='amenities'>
        <Left>
          <h1>Amenities</h1>
          <CardsContainer>
            {Aminites.map((amenity) => (
              <Card key={amenity.id} data-aos="fade-right">
                <p>{amenity.name}</p>
              </Card>
            ))}
          </CardsContainer>
        </Left>
        <Divider />
        <Right>
          <h2>INDUGLE</h2>
          <h2>N LUXURY, EMBRACE SERENITY</h2>
        </Right>
      </Container>
    </>
  );
};

export default Amenities;

const Container = styled.div`
  width: 100vw;
  padding: 20px 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  h1{
    color: var(--secondary-color);
  }
  @media only screen and (max-width: 1024px) {
    padding: 20px;
    flex-direction: column;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  margin: 20px;
  width: 280px;

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    color: #333;
  }
`;

const Left = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;



const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;

  h2 {
    color: var(--secondary-color);
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
    @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Divider = styled.div`
  height: 350px;
  width: 5px;
  background-color: var(--secondary-color);

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
