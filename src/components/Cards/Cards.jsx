import Card from 'components/Card/Card';

import {
  CardsListWrapper,
  CardItemWrapper,
} from 'components/Cards/Cards.styled';

const Cards = ({ filteredTweets }) => {
  return (
    <CardsListWrapper>
      {filteredTweets.map(tweet => (
        <CardItemWrapper key={tweet.id}>
          <Card tweet={tweet} />
        </CardItemWrapper>
      ))}
    </CardsListWrapper>
  );
};

export default Cards;
