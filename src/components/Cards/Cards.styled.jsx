import styled from '@emotion/styled';

export const CardsListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;

  list-style: none;
`;

export const CardItemWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 36px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
