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
} from '../App.styled';

const Tweets = () => {
  const [visibleTweets, setVisibleTweets] = useState(3);
  const [isLoadMoreDisabled, setLoadMoreDisabled] = useState(false);

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
    const newVisibleTweets = Math.min(visibleTweets + 3);

    setVisibleTweets(newVisibleTweets);

    if (newVisibleTweets >= filteredTweets.length) {
      setLoadMoreDisabled(true);
    }
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
      <LoadMoreBtn
        type="button"
        onClick={handleLoadMore}
        disabled={isLoadMoreDisabled}
        style={
          isLoadMoreDisabled ? { opacity: 0.5, cursor: 'not-allowed' } : null
        }
      >
        Load More
      </LoadMoreBtn>
    </TweetsContainer>
  );
};

export default Tweets;
