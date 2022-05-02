import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Auth {
  login: boolean;
}

const AuthInfo: Auth = {
  login: false,
};
export const AuthSlice = createSlice({
  name: "autInfo",
  initialState: AuthInfo,
  reducers: {
    setAuth: (el) => {
      el.login = !el.login;
      console.log(el.login);
    },
  },
});

export const { setAuth } = AuthSlice.actions;
export const AuthAction = AuthSlice.actions;
