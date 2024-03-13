    import React from 'react';
    import styled from 'styled-components';

    const Container = styled.footer`
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    `;

    const Footer: React.FC = () => {
    return (
        <Container>
        <p>&copy; {new Date().getFullYear()} Coral Store. Todos os direitos reservados.</p>
        </Container>
    );
    };

    export default Footer;
