import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: [],
    status: "offline",
}

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
      state.status = "online";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
