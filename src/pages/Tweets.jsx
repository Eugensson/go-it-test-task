import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTweets } from 'redux/tweets/operations';
import { selectFilter } from 'redux/filter/selectors';
import { selectAllTweets, selectFollowers } from 'redux/tweets/selectors';
import Filter from 'components/Filter/Filter';
import Cards from 'components/Cards/Cards';

import {
  TweetsContainer,
  BackLink,
  TweetsWrapper,
  LoadMoreBtn,
} from '../components/App/App.styled';

const Tweets = () => {
  const [visibleTweets, setVisibleTweets] = useState(3);

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const tweets = useSelector(selectAllTweets);
  const followers = useSelector(selectFollowers);

  let filteredTweets = tweets;

  if (filter === 'follow') {
    filteredTweets = tweets.filter(
      tweet => !followers.includes(Number(tweet.id))
    );
  } else if (filter === 'followings') {
    filteredTweets = tweets.filter(tweet =>
      followers.includes(Number(tweet.id))
    );
  }

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleTweets(prevVisibleTweets =>
      Math.min(prevVisibleTweets + (filteredTweets.length - 3))
    );
  };

  return (
    <TweetsContainer>
      <TweetsWrapper>
        <BackLink to="/">Back</BackLink>
        <Filter />
      </TweetsWrapper>
      {filteredTweets.length > 0 && (
        <Cards visibleTweets={visibleTweets} filteredTweets={filteredTweets} />
      )}
      <LoadMoreBtn type="button" onClick={handleLoadMore}>
        Load More
      </LoadMoreBtn>
    </TweetsContainer>
  );
};

export default Tweets;
