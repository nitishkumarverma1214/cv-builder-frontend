import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        username: action.payload.username,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;
