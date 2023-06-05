import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LayoutWrapper = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px;

  border-bottom: 3px solid #471ca9;

  > nav {
    display: flex;
    gap: 10px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;

  font-weight: 500;
  border-radius: 4px;
  text-decoration: none;
  border: 2px solid transparent;
  color: #471ca9;

  &:hover,
  &:focus {
    border: 2px solid orangered;
  }

  &.active {
    color: #fff;
    background-color: orangered;
  }
`;
