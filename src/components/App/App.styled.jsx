import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
`;

export const TweetsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 26px;
  background-color: #fff;
  color: #471ca9;
  padding: 8px 16px;
  font-weight: 500;
  height: 40px;
  border-radius: 5px;
  border: 2px solid orangered;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: orangered;
    color: #fff;
  }
`;
