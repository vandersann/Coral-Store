    import React from 'react';
    import styled from 'styled-components';
    import ProductList from '../components/ProductList';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    `;

const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
    `;

const Paragraph = styled.p`
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
    `;

const HomeImage = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-bottom: 20px;
    `;

const HomePage: React.FC = () => {
    return (
        <Container>
        <Title>Welcome to Coral Store</Title>
        <Paragraph>Discover our wide range of products.</Paragraph>
        <HomeImage src="#" alt="Home Image" />
        </Container>
    );
    };

export default HomePage;
