import { IUser } from '@/interface/user.interface';
import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  user: null | IUser;
  token: null | string;
}

const initialState: IAuthState = {
  user: null,
  token: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuthState>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    updateProfile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;

export const getCurrentToken = (state: RootState) => state.auth.token;
export const getCurrentUser = (state: RootState) => state.auth.user;
