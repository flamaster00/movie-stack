import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
