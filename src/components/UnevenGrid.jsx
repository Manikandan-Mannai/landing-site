import React from 'react';
import styled from 'styled-components';
import { businessCard } from './data';


const UnevenGrid = () => {
  return (
    <Section>
      <Left>
        <Line />
        <h1>BUSINESS ECOSYSTEM</h1>
        <p>Alstom, and more. Located opposite Sricity, this premier property offers immediate access to a plethora of top-notch amenities, from world-class healthcare facilities and esteemed educational institutions to vibrant retail centers, ensuring an enriched everyday life. Travel and accessibility become a breeze thanks to Sricity's well-connected network to major cities and transportation hubs.</p>
      </Left>
      <Container>
        {businessCard.map((item) => (
          <Item key={item.id}>
            <Image src={item.image} alt={`Feature ${item.id}`} />
          </Item>
        ))}
      </Container>
    </Section>
  );
};

export default UnevenGrid;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100vw;
  padding: 20px 104px;
@media only screen and (max-width: 768px) {
  flex-direction: column;
  padding: 20px;
}
  `;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-basis: 55%;
  `;

const Item = styled.div`
  position: relative;
  flex: 1 1 auto;
  color: #fff;
  margin: 10px;
  height: 250px;
  width: calc(25% - 20px);
  overflow: hidden;
  &:nth-child(2n) {
    flex-basis: calc(50% - 20px);
  }
  
  &:nth-child(3n) {
    flex-basis: calc(33.33% - 20px);
  }
  
  &:nth-child(4n) {
    flex-basis: calc(25% - 20px);
  }
  `;


const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 5px;
  border: 8px solid var(--primary-color);
  transition: border-color 0.3s ease-in-out;
  `;

const Left = styled.div`
flex-basis: 40%;
@media only screen and (max-width: 768px) {
h1{
  text-align: right;
}
p{
  text-align: justify;
}
}
`


const Line = styled.div`
  width: 100px;
  height: 10px;
  background-color: var(--primary-color);
@media only screen and (max-width: 768px) {
  margin-left: 73%;
}
`;
