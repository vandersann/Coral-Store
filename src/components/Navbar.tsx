    import React from 'react';
    import styled from 'styled-components';
    import { Link } from 'react-router-dom';

    const Container = styled.nav`
    background-color: #007bff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    `;

    const Logo = styled(Link)`
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    `;

    const Navbar: React.FC = () => {
    return (
        <Container>
        <Logo to="/">Coral Store</Logo>
        <div>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </div>
        </Container>
    );
    };

    export default Navbar;
