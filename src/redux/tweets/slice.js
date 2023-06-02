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
      .addCase(followTweet.pending, handlePending)
      .addCase(unFollowTweet.pending, handlePending)
      .addCase(fetchTweets.rejected, handleRejected)
      .addCase(followTweet.rejected, handleRejected)
      .addCase(unFollowTweet.rejected, handleRejected)
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(followTweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const tweetId = action.meta.arg.id;
        const tweet = state.items.find(tweet => tweet.id === tweetId);
        if (tweet) {
          tweet.followers += 1;
          state.followers.push(Number(tweetId));
        }
      })
      .addCase(unFollowTweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const tweetId = action.meta.arg.id;
        const tweet = state.items.find(tweet => tweet.id === tweetId);
        if (tweet) {
          tweet.followers -= 1;
          state.followers = state.followers.filter(
            id => id !== Number(tweetId)
          );
        }
      });
  },
});

export const tweetsReducer = persistReducer(persistConfig, tweetsSlice.reducer);
