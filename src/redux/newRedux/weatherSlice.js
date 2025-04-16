import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setWeather } = counterSlice.actions;
export default counterSlice.reducer;
