import React from 'react';
import styled from 'styled-components';
import { Aminites } from './data';

const Aminities = () => {
    return (
        <>
            {/* <h1>Aminities</h1> */}
            <Container>
                <Left>
                    <CardsContainer>
                        {Aminites.map((amenity) => (
                            <Card key={amenity.id}>
                                <h3>{amenity.name}</h3>
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

export default Aminities;

const Container = styled.div`
  width: 100vw;
  padding: 20px 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
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
  cursor: pointer;
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

  h2{
    color: var(--secondary-color);
  }
`;

const Divider = styled.div`
 height: 350px;
 width: 5px;
 background-color: var(--secondary-color);
`;