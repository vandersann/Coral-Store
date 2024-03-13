    import React from 'react';
    import styled from 'styled-components';

    const Container = styled.div`
    padding: 20px;
    `;

    const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
    `;

    const EmptyCart = styled.p`
    font-size: 1.5rem;
    `;

    const CartPage: React.FC = () => {
    return (
        <Container>
        <Title>Your Cart</Title>
        <EmptyCart>Your cart is empty.</EmptyCart>
        </Container>
    );
    };

    export default CartPage;
