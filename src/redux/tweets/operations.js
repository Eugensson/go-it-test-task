import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://6479d167a455e257fa63d6d6.mockapi.io';

export const fetchTweets = createAsyncThunk(
  'tweets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/users');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const followTweet = createAsyncThunk(
  'tweets/followTweet',
  async (tweet, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${tweet.id}`, {
        followers: tweet.followers + 1,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const unFollowTweet = createAsyncThunk(
  'tweets/unFollowTweet',
  async (tweet, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${tweet.id}`, {
        followers: tweet.followers - 1,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
