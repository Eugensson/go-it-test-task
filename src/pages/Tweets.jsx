import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTweets } from 'redux/tweets/operations';
import { selectFilter } from 'redux/filter/selectors';
import { selectAllTweets, selectFollowers } from 'redux/tweets/selectors';
import Filter from 'components/Filter/Filter';
import Cards from 'components/Cards/Cards';

import { BackLink, TweetsWrapper } from '../components/App/App.styled';

const Tweets = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const tweets = useSelector(selectAllTweets);
  const folowers = useSelector(selectFollowers);

  let filteredTweets = tweets;

  if (filter === 'follow') {
    filteredTweets = tweets.filter(
      tweet => !folowers.includes(Number(tweet.id))
    );
  } else if (filter === 'followings') {
    filteredTweets = tweets.filter(tweet =>
      folowers.includes(Number(tweet.id))
    );
  }

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <>
      <TweetsWrapper>
        <BackLink to="/">Back</BackLink>
        <Filter />
      </TweetsWrapper>
      {filteredTweets.length > 0 && <Cards filteredTweets={filteredTweets} />}
    </>
  );
};

export default Tweets;
