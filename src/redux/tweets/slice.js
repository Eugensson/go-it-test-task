import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { fetchTweets, followTweet, unFollowTweet } from './operations';

const persistConfig = {
  key: 'tweets',
  storage,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFollowTweet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const tweetId = action.meta.arg.id;
  const tweet = state.items.find(tweet => tweet.id === tweetId);
  if (tweet) {
    tweet.followers += 1;
    state.followers.push(Number(tweetId));
  }
};

const handleUnfollowTweet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const tweetId = action.meta.arg.id;
  const tweet = state.items.find(tweet => tweet.id === tweetId);
  if (tweet) {
    tweet.followers -= 1;
    state.followers = state.followers.filter(id => id !== Number(tweetId));
  }
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    items: [],
    followers: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.pending, handlePending)
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTweets.rejected, handleRejected)

      .addCase(followTweet.pending, handlePending)
      .addCase(followTweet.fulfilled, (state, action) => {
        handleFollowTweet(state, action);
      })
      .addCase(followTweet.rejected, handleRejected)

      .addCase(unFollowTweet.pending, handlePending)
      .addCase(unFollowTweet.fulfilled, (state, action) => {
        handleUnfollowTweet(state, action);
      })
      .addCase(unFollowTweet.rejected, handleRejected);
  },
});

export const tweetsReducer = persistReducer(persistConfig, tweetsSlice.reducer);
