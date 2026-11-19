import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../api/authenticate';

type State = {
  user: undefined | User;
  permissions: undefined | string[];
  loading: boolean;
  location: string;
};
const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
  location: 'mangalore',
};

export const userSlice = createSlice({
  name: 'user', // user
  initialState,
  reducers: {
    // mutable code ->  Immer.js     -> immutable
    authenticateAction: (state) => {
      state.loading = true; //
    },
    authenticatedAction: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload; // {id:1,name:'bob'}
      state.loading = false;
    },
    authorizeAction: (state) => {
      state.loading = true;
    },
    authorizedAction: (state, action: PayloadAction<string[]>) => {
      state.permissions = action.payload;
      state.loading = false;
    },
  },
});

export const { authenticateAction, authenticatedAction, authorizeAction, authorizedAction } =
  userSlice.actions;

export default userSlice.reducer;
