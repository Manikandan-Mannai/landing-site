import React from "react";
import styled from "styled-components";
import { timeline } from "./data";

const Container = styled.div`
  padding: 20px 0px;
  background-color: var(--primary-color);

  h1 {
    font-size: 48px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  @media (max-width: 1000px) {
    flex-direction: ${({ condition }) =>
      condition % 2 === 1 ? "column-reverse" : "column"};
  }
`;

const Right = styled.div`
  width: 600px;
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: var(--secondary-color);
  margin: 0px;
`;

const Left = styled.div`
  width: 600px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--secondary-color);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: max-content;
  max-width: 600px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  box-shadow: 1px 0px 8px 1px rgb(0,0,0,0.5);
`;

const Line = styled.div`
  width: 100px;
  height: 10px;
  background-color: #d0a850;
  margin-bottom: 30px;
`;

const TextContainerLeft = styled.div`
  width: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  h1,
  h3 {
    align-self: flex-start;
    text-align: left;
    margin: 0;
  }
`;

const TextContainerRight = styled.div`
  width: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: end;
  h1,
  h3 {
    align-self: flex-end;
    text-align: right;
    margin: 0;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
`;

const TimeLine = () => {
  return (
    <Container>
      <InnerContainer>
        {timeline.map((item, index) => {
          return (
            <Box key={index} condition={index}>
              {index % 2 === 0 ? (
                <>
                  <Left>
                    <ImageContainer>
                      <Image src={item.img} alt="" />
                    </ImageContainer>
                  </Left>

                  <Right>
                    <TextContainerLeft>
                      <h1>{item.header}</h1>
                      <Line />
                      <h3>{item.content}</h3>
                    </TextContainerLeft>
                  </Right>
                </>
              ) : (
                <>
                  <Left>
                    <TextContainerRight>
                      <h1>{item.header}</h1>
                      <Line />
                      <h3>{item.content}</h3>
                    </TextContainerRight>
                  </Left>

                  <Right>
                    <ImageContainer>
                      <Image src={item.img} alt="" />
                    </ImageContainer>
                  </Right>
                </>
              )}
            </Box>
          );
        })}
      </InnerContainer>
    </Container>
  );
};

export default TimeLine;
