import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper, Header, Link } from './Layout.styled';

const SharedLayout = () => {
  return (
    <LayoutWrapper>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <Outlet />
    </LayoutWrapper>
  );
};

export default SharedLayout;
