import Card from 'components/Card/Card';

import {
  CardsListWrapper,
  CardItemWrapper,
} from 'components/Cards/Cards.styled';

const Cards = ({ filteredTweets, visibleTweets }) => {
  return (
    <CardsListWrapper>
      {filteredTweets.slice(0, visibleTweets).map(tweet => (
        <CardItemWrapper key={tweet.id}>
          <Card tweet={tweet} />
        </CardItemWrapper>
      ))}
    </CardsListWrapper>
  );
};

export default Cards;
