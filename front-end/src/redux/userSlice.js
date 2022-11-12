import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    success: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    fail: (state, action) => {
      state.error = action.payload;
      state.user = null;
    },
  },
});

export const { success, fail } = userSlice.actions;

export default userSlice.reducer;
