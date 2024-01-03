import React, { useState } from "react";
import styled from 'styled-components';
import { LocationData } from "./data";

const Location = () => {
    const [activeTab, setActiveTab] = useState("0-2KM");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const renderTabContent = (data) => {
        return Object.keys(data).map((range) => (
            <Tab key={range} active={activeTab === range}>
                <h3>{range}</h3>
                {Object.keys(data[range]).map((category) => (
                    <div key={category}>
                        <h3>{category}</h3>
                        <ul>
                            {data[range][category].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Tab>
        ));
    };
    return (
        <Container>
            <Left>
                <Map data-aos="fade-right">
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10970.109486265126!2d80.05290969770056!3d13.565047585924153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splot%20no%3A%20206%20-%20lake%20view%20serenity%20pudi%2C%20tada%20-%20524401.%20tirupathi%20district%2C%20andhra%20pradesh!5e0!3m2!1sen!2sin!4v1703932568301!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></Iframe>
                </Map>
            </Left>
            <Right>
                <TabsContainer>
                    {Object.keys(LocationData).map((range) => (
                        <TabButton
                            key={range}
                            onClick={() => handleTabChange(range)}
                            active={activeTab === range}
                        >
                            {range}
                        </TabButton>
                    ))}
                </TabsContainer>
                <TabContent>{renderTabContent(LocationData)}</TabContent>
            </Right>
        </Container>
    )
}

export default Location

const Container = styled.div`
    width: 100vw;
    max-height: 100vh;
    padding: 20px 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms ease-in;
    margin-top: 10%;
    @media only screen and (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (max-width: 1024px) {
        margin-top: 40%;
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

const Map = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 10px;
    border: 5px solid var(--primary-color);

    @media only screen and (max-width: 768px) {
        height: 300px;
    }
`

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
`

const Right = styled.div`
    position: relative;
    flex: 1;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5%;
    @media only screen and (max-width: 768px) {
        margin-top: 0 !important;
    }
`;

const TabsContainer = styled.div`
    position: absolute;
    top: 0%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media only screen and (max-width: 768px) {
        position: static;
        width: 100%;
        margin-bottom: 20px;
    }
`;

const Tab = styled.div`
    height: 500px;
    display: ${(props) => (props.active ? "block" : "none")};
    margin-top: 10%;
    margin-left: 10%;
    h3 {
        margin-top: 2%;
    }
    transition: all 300ms ease-in;
    
    @media only screen and (max-width: 768px) {
        height: 500px;
        width: 300px;
        margin: 0;
        margin-bottom: 10%;
        h3 {
            margin-top: 5%;
        }
    }
`;

const TabButton = styled.button`
    font-size: 16px;
    font-weight: bold;
    background-color: ${(props) => (props.active ? "var(--primary-color)" : "transparent")};
    padding: 12px 20px;
    border-radius: 5px;
    border: none;
    border-bottom: ${(props) => (props.active ? '2px solid var(--primary-color)' : 'none')};
    color: ${(props) => (props.active ? "var(--secondary-color)" : "var(--text-color)")};
    cursor: pointer;
    
    @media only screen and (max-width: 768px) {
        width: 100%;
        font-size: 12px;
        padding: 8px 12px;
        margin-top: 5%;
    }
`;

const TabContent = styled.div`
    ul li {
        list-style: none;
    }
`;

