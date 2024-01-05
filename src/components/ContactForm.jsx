import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactInfo = ({ onClose }) => {
  return (
    <Overlay role="dialog" aria-labelledby="contactFormHeading" aria-describedby="contactFormDescription">
      <FormWrapper>
        <CloseButton onClick={onClose} role="button" aria-label="Close contact form">&times;</CloseButton>
        <FormHeader id="contactFormHeading">Contact Information</FormHeader>

        <ContactMethod role="group" aria-label="Contact Methods">
          <IconLink href="mailto:kalpana@kllifespace.com">
            <FaEnvelope />
          </IconLink>
          <ContactDetail aria-label="Email address">kalpana@kllifespace.com</ContactDetail>
        </ContactMethod>

        <ContactMethod role="group" aria-label="Contact Methods">
          <IconLink href="tel:+917901333332">
            <FaPhone />
          </IconLink>
          <ContactDetail aria-label="Phone number">+91 7901333332</ContactDetail>
        </ContactMethod>

        <ContactMethod role="group" aria-label="Contact Methods">
          <IconLink href="tel:+917661900900">
            <FaPhone />
          </IconLink>
          <ContactDetail aria-label="Phone number">+91 7661900900</ContactDetail>
        </ContactMethod>
      </FormWrapper>
    </Overlay>
  );

};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  background-color: white;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 100;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const FormHeader = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
`;

const IconLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
    margin-right: 5px;
`;

const ContactDetail = styled.div`
  font-size: 16px;
`;

export default ContactInfo;
