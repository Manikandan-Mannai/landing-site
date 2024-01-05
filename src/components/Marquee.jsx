import React from 'react'
import styled from 'styled-components';
import Image1 from '../assets/brands/1.png'
import Image2 from '../assets/brands/2.png'
import Image3 from '../assets/brands/3.png'
import Image4 from '../assets/brands/4.png'
import Image5 from '../assets/brands/5.png'
import Image6 from '../assets/brands/6.png'

const Marquee = () => {
    return (
        <Container>
            <ImageContainer>
                <img src={Image1} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={Image2} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={Image3} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={Image4} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={Image5} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={Image6} alt="" />
            </ImageContainer>
        </Container>
    )
}

export default Marquee

const Container = styled.div`
    background-color: #E9E9E9;
    padding: 20px 0 0 0;
    max-height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ImageContainer = styled.div`
    width: 200px;
    img{
        width: 100%;
        object-fit: contain;
    }
`