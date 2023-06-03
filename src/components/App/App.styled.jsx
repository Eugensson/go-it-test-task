import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 0 auto 50px;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 50px auto 0;
  padding: 40px;
  width: 800px;

  border-radius: 5px;
  border: 3px solid orangered;
`;

export const HomeTitle = styled.h1`
  text-align: center;
  color: orangered;
  font-weight: 700;

  // background-color: orangered;
`;

export const HomeText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.63;
  color: #471ca9;
`;

export const TweetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  padding: 8px 16px;
  height: 40px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.63;
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid orangered;
  cursor: pointer;
  color: #fff;
  background-color: orangered;
`;

export const LoadMoreBtn = styled.button`
  margin: 0 auto;
  padding: 8px 16px;
  height: 40px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.63;
  border-radius: 5px;
  border: 2px solid transparent;
  cursor: pointer;
  color: #fff;
  background-color: orangered;
`;
