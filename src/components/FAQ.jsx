import React, { useState } from 'react';
import styled from 'styled-components';
import { faqData } from './data';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding: 0px 20px; /* Adjust padding for smaller screens */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
h1{
  text-align: center;
}
  @media only screen and (min-width: 769px) {
    padding: 0px 104px;
  }
`;

const FAQWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  max-width: 800px;
`;

const FAQItem = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Question = styled.div`
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  background-color: white;
  color: ${(props) => (props.active ? 'var(--accent-color)' : 'black')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 200ms ease-in-out;
  width: 100%;
`;

const Answer = styled.div`
  max-height: ${(props) => (props.visible ? '1000px' : '0')};
  overflow: hidden;
  margin-top: 10px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  padding: 10px;
  border-top: 1px solid #ddd;
  transition: max-height 300ms ease-in-out, opacity 300ms ease-in-out;
  width: 100%;
`;

const Arrow = styled.span`
  font-size: 16px;
  margin-left: 10px;
  transform: ${(props) => (props.active ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 200ms ease-in-out;
`;

const FAQ = () => {
  const [activeQuestions, setActiveQuestions] = useState([]);

  const toggleQuestion = (index) => {
    setActiveQuestions((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <Container>
      <h1>Frequently Asked Questions</h1>
      <FAQWrapper>
        {faqData.map((faq, index) => (
          <FAQItem key={index}>
            <Question
              onClick={() => toggleQuestion(index)}
              active={activeQuestions.includes(index)}
            >
              {faq.question}
              <Arrow active={activeQuestions.includes(index)}>▼</Arrow>
            </Question>
            <Answer visible={activeQuestions.includes(index)}>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </FAQWrapper>
    </Container>
  );
};

export default FAQ;
