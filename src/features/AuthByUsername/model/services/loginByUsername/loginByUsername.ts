import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/const';

interface loginByUsernameProps {
  username: string;
  password: string;
}

const url = 'http://localhost:8000';

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post<User>(`${url}/login`, { username, password });
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
